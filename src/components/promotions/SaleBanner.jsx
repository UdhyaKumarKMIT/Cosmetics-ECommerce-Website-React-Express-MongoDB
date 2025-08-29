#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
    vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
        map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

        // Step 1: Store diagonals in appropriate heaps
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
                } else {
                    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
                }
            }
        }

        // Step 2: Refill the grid with sorted values
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    grid[i][j] = maxHeaps[diagIndex].top();
                    maxHeaps[diagIndex].pop();
                } else {
                    grid[i][j] = minHeaps[diagIndex].top();
                    minHeaps[diagIndex].pop();
                }
            }
        }

        return grid;
    }
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
    vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
        map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

        // Step 1: Store diagonals in appropriate heaps
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
                } else {
                    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
                }
            }
        }

        // Step 2: Refill the grid with sorted values
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    grid[i][j] = maxHeaps[diagIndex].top();
                    maxHeaps[diagIndex].pop();
                } else {
                    grid[i][j] = minHeaps[diagIndex].top();
                    minHeaps[diagIndex].pop();
                }
            }
        }

        return grid;
    }
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
    vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
        map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

        // Step 1: Store diagonals in appropriate heaps
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
                } else {
                    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
                }
            }
        }

        // Step 2: Refill the grid with sorted values
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    grid[i][j] = maxHeaps[diagIndex].top();
                    maxHeaps[diagIndex].pop();
                } else {
                    grid[i][j] = minHeaps[diagIndex].top();
                    minHeaps[diagIndex].pop();
                }
            }
        }

        return grid;
    }
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
    vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
        map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

        // Step 1: Store diagonals in appropriate heaps
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
                } else {
                    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
                }
            }
        }

        // Step 2: Refill the grid with sorted values
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    grid[i][j] = maxHeaps[diagIndex].top();
                    maxHeaps[diagIndex].pop();
                } else {
                    grid[i][j] = minHeaps[diagIndex].top();
                    minHeaps[diagIndex].pop();
                }
            }
        }

        return grid;
    }
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
    vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
        map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

        // Step 1: Store diagonals in appropriate heaps
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
                } else {
                    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
                }
            }
        }

        // Step 2: Refill the grid with sorted values
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int diagIndex = j - i;
                if (diagIndex <= 0) {
                    grid[i][j] = maxHeaps[diagIndex].top();
                    maxHeaps[diagIndex].pop();
                } else {
                    grid[i][j] = minHeaps[diagIndex].top();
                    minHeaps[diagIndex].pop();
                }
            }
        }

        return grid;
    }
};
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
int n = grid.size();
map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

// Step 1: Store diagonals in appropriate heaps
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
int n = grid.size();
map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

// Step 1: Store diagonals in appropriate heaps
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
int n = grid.size();
map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

// Step 1: Store diagonals in appropriate heaps
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
int n = grid.size();
map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

// Step 1: Store diagonals in appropriate heaps
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
int n = grid.size();
map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

// Step 1: Store diagonals in appropriate heaps
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
#include <iostream>
#include <vector>
#include <map>
#include <queue>

using namespace std;

class Solution {
public:
vector<vector<int>> sortMatrix(vector<vector<int>>& grid) {
int n = grid.size();
map<int, priority_queue<int>> maxHeaps;  // Descending order for bottom-left
map<int, priority_queue<int, vector<int>, greater<int>>> minHeaps;  // Ascending order for top-right

// Step 1: Store diagonals in appropriate heaps
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    maxHeaps[diagIndex].push(grid[i][j]);  // Max-Heap for bottom-left
} else {
    minHeaps[diagIndex].push(grid[i][j]);  // Min-Heap for top-right
}
}
}

// Step 2: Refill the grid with sorted values
for (int i = 0; i < n; i++) {
for (int j = 0; j < n; j++) {
int diagIndex = j - i;
if (diagIndex <= 0) {
    grid[i][j] = maxHeaps[diagIndex].top();
    maxHeaps[diagIndex].pop();
} else {
    grid[i][j] = minHeaps[diagIndex].top();
    minHeaps[diagIndex].pop();
}
}
}

return grid;
}
};
