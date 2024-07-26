import { CommonModule, NgFor, NgIfContext } from '@angular/common';
import { Component, Injectable, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CdkTreeModule, FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import {
  ReactiveFormsModule,
  FormsModule,
  FormControlName,
  FormControl,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { DataSource } from '@angular/cdk/collections';

// Define the TodoItemNode and TodoItemFlatNode classes
export class TodoItemNode {
  children: TodoItemNode[] = [];
  item: string = '';
}

export class TodoItemFlatNode {
  item: string = '';
  level: number = 0;
  expandable: boolean = false;
  isBeingEdited: boolean = false;
}

// Define the tree data structure
const TREE_DATA = {
  Groceries: {
    'Almond Meal flour': null,
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: null,
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null,
    },
  },
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular',
  ],
};

// Define the ChecklistDatabase service
@Injectable()
export class ChecklistDatabase {
  // Observable to track changes in the tree data
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  // Getter to access the current tree data
  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }

  constructor() {
    // Initialize the tree data when the service is created
    this.initialize();
  }

  // Initialize the tree with data
  initialize() {
    // Build the tree structure from the provided data
    const data = this.buildFileTree(TREE_DATA, 0);
    // Emit the new data to the dataChange observable
    this.dataChange.next(data);
  }

  // Build a tree structure from an object, converting it to an array of nodes
  buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      // If the value is not null
      if (value != null) {
        // If the value is an object and not an array, build a subtree
        if (typeof value === 'object' && !Array.isArray(value)) {
          node.children = this.buildFileTree(value, level + 1);
          // If the value is an array, map each item to a child node
        } else if (Array.isArray(value)) {
          node.children = value.map((item) => {
            const childNode = new TodoItemNode();
            childNode.item = item;
            return childNode;
          });
          // If the value is a primitive, set it as the item of the node
        } else {
          node.item = value;
        }
      }

      // Add the node to the accumulator array
      return accumulator.concat(node);
    }, []);
  }

  // Insert a new item as a child of a specified parent node
  insertItem(parent: TodoItemNode, name: string) {
    // If the parent already has children, add the new item to the children array
    if (parent.children) {
      parent.children.push({ item: name, children: [] } as TodoItemNode);
      // If the parent has no children, create a new children array with the new item
    } else {
      parent.children = [{ item: name, children: [] } as TodoItemNode];
    }
    // Emit the updated data to the dataChange observable
    this.dataChange.next(this.data);
  }

  // Update the name of an existing node
  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    // Emit the updated data to the dataChange observable
    this.dataChange.next(this.data);
  }

  // Delete a specified node from the tree
  deleteItem(node: TodoItemNode): void {
    // Handle removal of the node from the tree
    if (this.removeNode(this.data, node)) {
      // Emit the updated data to the dataChange observable
      this.dataChange.next(this.data);
    }
  }

  // Helper function to remove a node from the tree recursively
  private removeNode(nodes: TodoItemNode[], target: TodoItemNode): boolean {
    // Find the index of the target node in the current array
    const index = nodes.findIndex((node) => node === target);

    // If the target node is found, remove it from the array
    if (index > -1) {
      nodes.splice(index, 1);
      return true;
    }

    // Recursively check and remove the target node from the children of each node
    return nodes.some((node) => this.removeNode(node.children || [], target));
  }
}

@Component({
  selector: 'app-flattreematerial',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTreeModule,
    MatTreeModule,
    ReactiveFormsModule,
    FormsModule,
    MatInput,
    MatAutocompleteModule,
    NgFor,
    MatSelectModule,
  ],
  templateUrl: './flattreematerial.component.html',
  styleUrls: ['./flattreematerial.component.css'],
  providers: [ChecklistDatabase],
})
export class FlattreematerialComponent {
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>(); // Map to link flat nodes to nested nodes
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>(); // Map to link nested nodes to flat nodes
  selectedParent: TodoItemFlatNode | null = null; // Track the selected parent node
  newItemName: string = '';
  editNodeValue: string = '';
  editNodeLevel: string = '';
  myControl = new FormControl(''); // Form control for input
  editingNode: TodoItemFlatNode | null = null; // Track the node being edited
  editingNodePosition: TodoItemFlatNode | null = null; // Track the position of the node being edited
  disableToggle: boolean = true; // Flag to disable the toggle

  nodeOptions: TodoItemFlatNode[] = []; // Store node options for dropdowns

  treeControl: FlatTreeControl<TodoItemFlatNode>; // Control for flat tree structure
  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>; // Flattener to convert nested to flat nodes
  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>; // Data source for the tree
  noToggle!: TemplateRef<NgIfContext<boolean>> | null; // Template reference for nodes without toggle

  isAdding: boolean = false; // Flag to manage "Add" state

  constructor(private _database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );

    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );

    // Subscribe to data changes and update the tree data and node options
    _database.dataChange.subscribe((data) => {
      this.dataSource.data = data;
      this.nodeOptions = this.getNodeOptions();
    });
  }

  getLevel = (node: TodoItemFlatNode) => node.level; // Get the level of a node

  isExpandable = (node: TodoItemFlatNode) => node.expandable; // Check if a node is expandable

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children; // Get the children of a node

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable; // Check if a node has a child

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) =>
    _nodeData.item === ''; // Check if a node has no content

  // Transformer function to convert a nested node to a flat node
  transformer = (node: TodoItemNode, level: number) => {
    // Attempt to get an existing flat node from the nested node map
    const existingNode = this.nestedNodeMap.get(node);

    // Determine if the existing flat node is still valid (i.e., has the same item)
    const flatNode =
      existingNode && existingNode.item === node.item
        ? existingNode // Use the existing flat node if it's valid
        : new TodoItemFlatNode(); // Otherwise, create a new flat node

    // Assign the item from the nested node to the flat node
    flatNode.item = node.item;

    // Set the level of the flat node
    flatNode.level = level;

    // Determine if the flat node is expandable based on the presence of children
    flatNode.expandable = !!node.children.length;

    // Map the flat node to the nested node in the flatNodeMap
    this.flatNodeMap.set(flatNode, node);

    // Map the nested node to the flat node in the nestedNodeMap
    this.nestedNodeMap.set(node, flatNode);

    // Return the transformed flat node
    return flatNode;
  };

  /** Select the category so we can insert the new item. */

  addNewItem(node: TodoItemFlatNode) {
this.isAdding=true

    const parentNode = this.flatNodeMap.get(node);

    if (parentNode) {
      if (!parentNode.children) {
        parentNode.children = []; // Initialize children array if it doesn't exist
      }
      this._database.insertItem(parentNode, ''); // Add the new item
      //node.expandable = true;

      this.treeControl.expand(node);
      // this.refreshTree(); // Force refresh\
      this.nodeOptions = this.getNodeOptions();
    }
  }

  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    if (nestedNode) {
      this._database.updateItem(nestedNode, itemValue);
      this.refreshTree(); // Force refresh\
      this.dataSource.data = [...this.dataSource.data];
      this.newItemName = '';
       this.isAdding = false; // Reset flag
    }
  }

  /**  it is used  for checking the length  of nodes that their children exists or not  */
  hasChildren(node: TodoItemFlatNode): boolean {
    const lvl = node.level;
    if (lvl > -1) {
      const nestedNode = this.flatNodeMap.get(node);
      return nestedNode ? nestedNode.children.length > 0 : false;
    }
    return true;
  }

  /**   This part perform delete button functionality    */
  //
  //
  deleteNode(node: TodoItemFlatNode): void {
    // //  const parentNode = this.getParentNode(node);

    const nestedNode = this.flatNodeMap.get(node);
    if (nestedNode) {
      const isRootWithChildren = this.hasChildren(node);
      if (isRootWithChildren) {
        console.log('cannot delete root node with children');
      } else {
        this._database.deleteItem(nestedNode);
      }
    }
  }

  // toggle node function
  toggleNode(node: TodoItemFlatNode): void {
    if (this.hasChildren(node)) {
      this.disableToggle = true;
      this.treeControl.toggle(node);
    }
  }

  // it refresh the tree suddenly
  refreshTree() {
    console.log('Refreshing tree');
    this.dataSource.data = [];

    this.dataSource.data = this._database.data;
  }
  /**  This is for Editing and Updating Item Name  */
  startEditing(node: TodoItemFlatNode) {
    this.editingNode = node;
    this.editNodeValue = node.item;
  }
  updateItemName(node: TodoItemFlatNode) {
    const nestedNode = this.flatNodeMap.get(node);
    if (nestedNode) {
      this._database.updateItem(nestedNode, this.editNodeValue);
      this.editingNode = null;
    }
  }
  ///

  ///
  /**  this part of code is for Updating the position and index of node */
  startEditingPosition(node: TodoItemFlatNode) {
    this.editingNodePosition = node;
    //this.editNodeLevel = node.item;
    this.nodeOptions = this.getNodeOptions(node);
    // if (this.hasChildren(node)) {
    //   this.disableToggle = true;

    //}
  }

  ///
  /**    it get child node and check if its parent exists or not perfome the functionality to chnge the position   */

  updateItemPosition(node: TodoItemFlatNode) {
    // Get the corresponding nested node using the flat node map
    const nestedNode = this.flatNodeMap.get(node);

    if (nestedNode) {
      // Find the current parent of the nested node

      const currentParent = this.findParentNode(nestedNode);
      if (currentParent) {
        // Remove the subtree from its current parent

        this.removeSubtree(currentParent, nestedNode);

        // Find the new parent node based on the selected node options or default to the original node

        const newParent = this.flatNodeMap.get(
          this.nodeOptions.find(
            (option) => option.item === this.editNodeLevel
          ) || node
        );
        if (newParent && newParent != currentParent) {
          // Add the subtree to the new parent node
          this.addSubtree(newParent, nestedNode);
          // Update the data to reflect the changes
          this.updateData();
          this.refreshTree();
          this.treeControl.toggle(node);
        }
        //}
      }
      // Reset the editing node position

      this.editingNodePosition = null;
      //
      /** this part is for root node with no Parents  */

      this._database.deleteItem(nestedNode);
      const newParent = this.flatNodeMap.get(
        this.nodeOptions.find((option) => option.item === this.editNodeLevel) ||
          node
      );
      if (newParent && newParent != currentParent) {
        // Add the subtree to the new parent node
        this.addSubtree(newParent, nestedNode);
        // Update the data to reflect the changes
        this.refreshTree();
        this.updateData();
        this.treeControl.expand(node);
      }
    }
  }

  //
  /**  It Remove the SubTree From Its Parent Node  */
  private removeSubtree(
    rootNode: TodoItemNode,
    subtree: TodoItemNode
  ): boolean {
    // Find the index of the subtree in the root node's children
    const index = rootNode.children?.indexOf(subtree);
    if (index !== undefined && index >= 0) {
      // Remove the subtree from the root node's children
      rootNode.children.splice(index, 1);
      return true;
    }

    // Recursively search and remove the subtree from child nodes
    return (
      rootNode.children?.some((child) => this.removeSubtree(child, subtree)) ??
      false
    );
  }

  //
  /** It Add Subtree to New Parent node  */
  private addSubtree(newParent: TodoItemNode, subtree: TodoItemNode): void {
    // Initialize the new parent's children array if it doesn't exist
    if (!newParent.children) {
      newParent.children = [];
    }
    // Add the subtree to the new parent's children
    newParent.children.push(subtree);

    this.refreshTree();
  }

  /** It Update the Database  */

  private updateData(): void {
    // Notify data change and refresh the tree to reflect updates
    this._database.dataChange.next(this._database.data);
    //  this.refreshTree();
  }

  // this function get child node and send node with database to fpnr to check parent node

  private findParentNode(node: TodoItemNode): TodoItemNode | null {
    // Recursively find the parent node of the given node
    return this.findParentNodeRecursive(this._database.data, node);
  }

  private findParentNodeRecursive(
    nodes: TodoItemNode[],
    target: TodoItemNode
  ): TodoItemNode | null {
    for (const node of nodes) {
      // Check if the target node is a direct child of the current node
      if (node.children?.includes(target)) {
        return node;
      }
      // Recursively search for the parent node in the child nodes
      const found = this.findParentNodeRecursive(node.children || [], target);
      if (found) {
        return found;
      }
    }
    return null;
  }

  //
  //
  /**    it convert all Flat node to simple data array for  the exclude Node check if the node to chnge must be available for  parents and siblings   */

  // Main function to get options of all nodes excluding specified nodes
  getNodeOptions(excludeNode?: TodoItemFlatNode): TodoItemFlatNode[] {
    // Get a set of nodes to be excluded
    const excludeNodes = this.getExcludedNodes(excludeNode);
    // Initialize an array to hold all the flat nodes
    const allNodes: TodoItemFlatNode[] = [];
    // Collect nodes, excluding specified nodes, and store them in allNodes
    this.collectNodes(this._database.data, 0, excludeNodes, allNodes);
    // Return the array of all flat nodes
    return allNodes;
  }

  // Helper function to collect nodes in a flat structure while excluding specified nodes
  private collectNodes(
    nodes: TodoItemNode[], // List of current nodes
    level: number, // Current level in the tree
    excludeNodes: Set<TodoItemNode>, // Set of nodes to be excluded
    allNodes: TodoItemFlatNode[] // Array to store all collected flat nodes
  ) {
    // Iterate over each node in the current list
    nodes.forEach((node) => {
      // If the node is not in the excludeNodes set
      if (!excludeNodes.has(node)) {
        // Transform the node into a flat node
        const flatNode = this.transformer(node, level);
        // Add the flat node to the allNodes array
        allNodes.push(flatNode);
        // If the node has children, recursively collect their nodes
        if (node.children) {
          this.collectNodes(node.children, level + 1, excludeNodes, allNodes);
        }
      }
    });
  }

  // Helper function to get the nodes to be excluded
  private getExcludedNodes(excludeNode?: TodoItemFlatNode): Set<TodoItemNode> {
    // Initialize a set to hold the nodes that need to be excluded
    const excludeNodes = new Set<TodoItemNode>();
    // If an excludeNode is provided
    if (excludeNode) {
      // Find the nested node corresponding to the provided flat node
      const nestedNode = this.flatNodeMap.get(excludeNode);
      // If the nested node is found
      if (nestedNode) {
        // Collect all nodes that should be excluded starting from the nested node
        this.collectExcludedNodes(nestedNode, excludeNodes);
      }
    }
    // Return the set of nodes to be excluded
    return excludeNodes;
  }

  // Helper function to collect all nodes that should be excluded
  private collectExcludedNodes(
    node: TodoItemNode,
    excludeNodes: Set<TodoItemNode>
  ) {
    // Add the node to the set of nodes to be excluded
    excludeNodes.add(node);
    // If the node has children, recursively collect their nodes
    if (node.children) {
      node.children.forEach((child) =>
        this.collectExcludedNodes(child, excludeNodes)
      );
    }
  }
}
