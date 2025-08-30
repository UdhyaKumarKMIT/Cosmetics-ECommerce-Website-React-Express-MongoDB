class Solution {
    public:
        int celebrity(vector<vector<int>>& mat) {
            int n = mat.size();
            int i = 0, j = n - 1;
            
            // Step 1: Find candidate
            while (i < j) {
                if (mat[i][j] == 1) {
                    // i knows j -> i cannot be celebrity
                    i++;
                } else {
                    // i does not know j -> j cannot be celebrity
                    j--;
                }
            }
            
            // Step 2: Verify candidate
            int candidate = i;
            for (int k = 0; k < n; k++) {
                if (k == candidate) continue;
                // Celebrity does not know anyone, but everyone knows celebrity
                if (mat[candidate][k] == 1 || mat[k][candidate] == 0) {
                    return -1;
                }
            }
            
            return candidate;
        }
    };
    class Solution {
        public:
            int celebrity(vector<vector<int>>& mat) {
                int n = mat.size();
                int i = 0, j = n - 1;
                
                // Step 1: Find candidate
                while (i < j) {
                    if (mat[i][j] == 1) {
                        // i knows j -> i cannot be celebrity
                        i++;
                    } else {
                        // i does not know j -> j cannot be celebrity
                        j--;
                    }
                }
                
                // Step 2: Verify candidate
                int candidate = i;
                for (int k = 0; k < n; k++) {
                    if (k == candidate) continue;
                    // Celebrity does not know anyone, but everyone knows celebrity
                    if (mat[candidate][k] == 1 || mat[k][candidate] == 0) {
                        return -1;
                    }
                }
                
                return candidate;
            }
        };
        class Solution {
            public:
                int celebrity(vector<vector<int>>& mat) {
                    int n = mat.size();
                    int i = 0, j = n - 1;
                    
                    // Step 1: Find candidate
                    while (i < j) {
                        if (mat[i][j] == 1) {
                            // i knows j -> i cannot be celebrity
                            i++;
                        } else {
                            // i does not know j -> j cannot be celebrity
                            j--;
                        }
                    }
                    
                    // Step 2: Verify candidate
                    int candidate = i;
                    for (int k = 0; k < n; k++) {
                        if (k == candidate) continue;
                        // Celebrity does not know anyone, but everyone knows celebrity
                        if (mat[candidate][k] == 1 || mat[k][candidate] == 0) {
                            return -1;
                        }
                    }
                    
                    return candidate;
                }
            };
            class Solution {
                public:
                    int celebrity(vector<vector<int>>& mat) {
                        int n = mat.size();
                        int i = 0, j = n - 1;
                        
                        // Step 1: Find candidate
                        while (i < j) {
                            if (mat[i][j] == 1) {
                                // i knows j -> i cannot be celebrity
                                i++;
                            } else {
                                // i does not know j -> j cannot be celebrity
                                j--;
                            }
                        }
                        
                        // Step 2: Verify candidate
                        int candidate = i;
                        for (int k = 0; k < n; k++) {
                            if (k == candidate) continue;
                            // Celebrity does not know anyone, but everyone knows celebrity
                            if (mat[candidate][k] == 1 || mat[k][candidate] == 0) {
                                return -1;
                            }
                        }
                        
                        return candidate;
                    }
                };
                class Solution {
                    public:
                        int celebrity(vector<vector<int>>& mat) {
                            int n = mat.size();
                            int i = 0, j = n - 1;
                            
                            // Step 1: Find candidate
                            while (i < j) {
                                if (mat[i][j] == 1) {
                                    // i knows j -> i cannot be celebrity
                                    i++;
                                } else {
                                    // i does not know j -> j cannot be celebrity
                                    j--;
                                }
                            }
                            
                            // Step 2: Verify candidate
                            int candidate = i;
                            for (int k = 0; k < n; k++) {
                                if (k == candidate) continue;
                                // Celebrity does not know anyone, but everyone knows celebrity
                                if (mat[candidate][k] == 1 || mat[k][candidate] == 0) {
                                    return -1;
                                }
                            }
                            
                            return candidate;
                        }
                    };
                                                        