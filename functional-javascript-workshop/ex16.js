module.exports = function getDependencies(tree) {
  function recursionHelper(tree) {
    if (!tree || !tree.hasOwnProperty('dependencies')) return []; // leaf node
    return Object.keys(tree.dependencies).reduce((currentDeps, key) => {
      return currentDeps.concat(key + '@' + tree.dependencies[key].version,
        recursionHelper(tree.dependencies[key])); // recurse down the tree
    }, []);
  }
  return Array.from(new Set(recursionHelper(tree).sort())); // unique sort
};
