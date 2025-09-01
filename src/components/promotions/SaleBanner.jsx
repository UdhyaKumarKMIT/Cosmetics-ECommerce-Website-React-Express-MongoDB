class Solution {
    public:
        int maxWater(vector<int> &arr) {
            int n = arr.size();
            int left = 0, right = n - 1;
            int maxArea = 0;
    
            while (left < right) {
                int height = min(arr[left], arr[right]);
                int width = right - left;
                maxArea = max(maxArea, height * width);
    
                // Move the smaller line inward
                if (arr[left] < arr[right])
                    left++;
                else
                    right--;
            }
    
            return maxArea;
        }
    };
    
    
    
    
    
    
    class Solution {
        public:
            int maxWater(vector<int> &arr) {
                int n = arr.size();
                int left = 0, right = n - 1;
                int maxArea = 0;
        
                while (left < right) {
                    int height = min(arr[left], arr[right]);
                    int width = right - left;
                    maxArea = max(maxArea, height * width);
        
                    // Move the smaller line inward
                    if (arr[left] < arr[right])
                        left++;
                    else
                        right--;
                }
        
                return maxArea;
            }
        };
        
        
        
        class Solution {
            public:
                int maxWater(vector<int> &arr) {
                    int n = arr.size();
                    int left = 0, right = n - 1;
                    int maxArea = 0;
            
                    while (left < right) {
                        int height = min(arr[left], arr[right]);
                        int width = right - left;
                        maxArea = max(maxArea, height * width);
            
                        // Move the smaller line inward
                        if (arr[left] < arr[right])
                            left++;
                        else
                            right--;
                    }
            
                    return maxArea;
                }
            };
            
            
            
            
            
            
            class Solution {
                public:
                    int maxWater(vector<int> &arr) {
                        int n = arr.size();
                        int left = 0, right = n - 1;
                        int maxArea = 0;
                
                        while (left < right) {
                            int height = min(arr[left], arr[right]);
                            int width = right - left;
                            maxArea = max(maxArea, height * width);
                
                            // Move the smaller line inward
                            if (arr[left] < arr[right])
                                left++;
                            else
                                right--;
                        }
                
                        return maxArea;
                    }
                };
                
                
                
                
                
                
                
        
        
        