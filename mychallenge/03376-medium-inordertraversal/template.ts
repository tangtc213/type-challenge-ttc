interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

// 二叉树中序遍历,与js版本一致
// [T] extends [TreeNode] ? 用于判断T是否为TreeNode, 这样忽略了null的情况，避免实例化过深的报错
type InorderTraversal<T extends TreeNode | null> =
  [T] extends [TreeNode] ?
  [...(T["left"] extends TreeNode ? InorderTraversal<T['left']> : [])
    , T['val'],
    ...(T extends TreeNode ? InorderTraversal<T['right']> : [])]
  : []


// js version
function InorderTraversal1<T extends TreeNode | null>(t: T): any[] {
  if (!t) {
    return [];
  }
  return [...InorderTraversal1(t.left), t.val, ...InorderTraversal1(t.right)];
}
