class Solution {
    public:
      int minDaysBloom(vector<int>& arr, int m, int k) {
          long long total = 1LL * m * k;
          if (total > arr.size()) return -1;  // not enough flowers
  
          int left = *min_element(arr.begin(), arr.end());
          int right = *max_element(arr.begin(), arr.end());
          int ans = -1;
  
          while (left <= right) {
              int mid = left + (right - left) / 2;
              if (canMake(arr, mid, m, k)) {
                  ans = mid;
                  right = mid - 1;  // try earlier
              } else {
                  left = mid + 1;   // need more days
              }
          }
          return ans;
      }
  
    private:
      bool canMake(vector<int>& arr, int day, int m, int k) {
          int bouquets = 0, flowers = 0;
          for (int x : arr) {
              if (x <= day) {
                  flowers++;
                  if (flowers == k) {
                      bouquets++;
                      flowers = 0;
                  }
              } else {
                  flowers = 0;
              }
          }
          return bouquets >= m;
      }
  };
  class Solution {
    public:
      int minDaysBloom(vector<int>& arr, int m, int k) {
          long long total = 1LL * m * k;
          if (total > arr.size()) return -1;  // not enough flowers
  
          int left = *min_element(arr.begin(), arr.end());
          int right = *max_element(arr.begin(), arr.end());
          int ans = -1;
  
          while (left <= right) {
              int mid = left + (right - left) / 2;
              if (canMake(arr, mid, m, k)) {
                  ans = mid;
                  right = mid - 1;  // try earlier
              } else {
                  left = mid + 1;   // need more days
              }
          }
          return ans;
      }
  
    private:
      bool canMake(vector<int>& arr, int day, int m, int k) {
          int bouquets = 0, flowers = 0;
          for (int x : arr) {
              if (x <= day) {
                  flowers++;
                  if (flowers == k) {
                      bouquets++;
                      flowers = 0;
                  }
              } else {
                  flowers = 0;
              }
          }
          return bouquets >= m;
      }
  };
class Solution {
  public:
    int minDaysBloom(vector<int>& arr, int m, int k) {
        long long total = 1LL * m * k;
        if (total > arr.size()) return -1;  // not enough flowers

        int left = *min_element(arr.begin(), arr.end());
        int right = *max_element(arr.begin(), arr.end());
        int ans = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (canMake(arr, mid, m, k)) {
                ans = mid;
                right = mid - 1;  // try earlier
            } else {
                left = mid + 1;   // need more days
            }
        }
        return ans;
    }

  private:
    bool canMake(vector<int>& arr, int day, int m, int k) {
        int bouquets = 0, flowers = 0;
        for (int x : arr) {
            if (x <= day) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        return bouquets >= m;
    }
};
    