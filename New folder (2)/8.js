/* Have the function GraphChallenge(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.

An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A. */

function GraphChallenge(strArr) {
  var nodes = strArr[0];
  var nodeList = strArr.slice(1, nodes + 1);
  var connections = strArr.slice(nodes + 1);
  var adjacencyList = {};

  for (var i = 0; i < nodeList.length; i++) {
    adjacencyList[nodeList[i]] = [];
  }

  for (var j = 0; j < connections.length; j++) {
    var connection = connections[j].split("-");
    adjacencyList[connection[0]].push(connection[1]);
    adjacencyList[connection[1]].push(connection[0]);
  }

  var visited = {};
  var toVisit = [];
  var path = [];
  var result = [];

  for (var k = 0; k < nodeList.length; k++) {
    if (!visited[nodeList[k]]) {
      toVisit.push(nodeList[k]);
      visited[nodeList[k]] = true;
      path.push(nodeList[k]);
    }
  }

  while (toVisit.length) {
    var currentNode = toVisit.shift();
    if (currentNode === nodeList[nodeList.length - 1]) {
      result = path.slice(0);
      break;
    }
    for (var l = 0; l < adjacencyList[currentNode].length; l++) {
      if (!visited[adjacencyList[currentNode][l]]) {
        toVisit.push(adjacencyList[currentNode][l]);
        visited[adjacencyList[currentNode][l]] = true;
        path.push(adjacencyList[currentNode][l]);
      }
    }
  }

  if (result.length) {
    return result.join("-");
  } else {
    return -1;
  }
}

console.log(GraphChallenge(["5", "A", "B", "C", "D", "F", "A-B", "A-C", "B-C", "C-D", "D-F"]));
