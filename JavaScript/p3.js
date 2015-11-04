/*
BFS without recursion
*/

function leaf(value, left, right)
{
    this.value = value;
    this.left = left;
    this.right = right;
}

var print_tree = function(tree, indent)
{
    if (tree == null)
        return;
    console.log(indent + String(tree.value));
    print_tree(tree.left,indent + "  ")
    print_tree(tree.right,indent + "  ")
}

root = new leaf(10, new leaf(9, new leaf(7,null,null), null), new leaf(8, null, null))
print_tree(root,"")

var pring_tree_bfs_no_recursion = function(tree)
{
    var stack = [];
    
    stack.push(tree)
    while(stack.length > 0)
    {
        top_s = stack.shift();
        if (top_s != null)
        {        
            console.log(String(top_s.value));
            if (top_s.left != null)
                stack.push(top_s.left);
            
            if (top_s.right != null)
                stack.push(top_s.right);
        }
    }
}

pring_tree_bfs_no_recursion(root)