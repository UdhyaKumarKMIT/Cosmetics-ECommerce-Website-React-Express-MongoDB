class Solution {
    public:
      bool canAllocate(vector<int>& arr, int k, int maxPages) {
          int students = 1;
          int pages = 0;
  
          for (int x : arr) {
              if (x > maxPages) return false; // single book exceeds limit
              if (pages + x > maxPages) {
                  students++;
                  pages = x;
                  if (students > k) return false;
              } else {
                  pages += x;
              }
          }
          return true;
      }
  
      int findPages(vector<int> &arr, int k) {
          if (k > arr.size()) return -1; // not enough books
  
          int low = *max_element(arr.begin(), arr.end());
          int high = accumulate(arr.begin(), arr.end(), 0);
          int ans = -1;
  
          while (low <= high) {
              int mid = low + (high - low) / 2;
              if (canAllocate(arr, k, mid)) {
                  ans = mid;
                  high = mid - 1; // try smaller
              } else {
                  low = mid + 1; // increase pages
              }
          }
          return ans;
      }
  };
  class Solution {
    public:
      bool canAllocate(vector<int>& arr, int k, int maxPages) {
          int students = 1;
          int pages = 0;
  
          for (int x : arr) {
              if (x > maxPages) return false; // single book exceeds limit
              if (pages + x > maxPages) {
                  students++;
                  pages = x;
                  if (students > k) return false;
              } else {
                  pages += x;
              }
          }
          return true;
      }
  
      int findPages(vector<int> &arr, int k) {
          if (k > arr.size()) return -1; // not enough books
  
          int low = *max_element(arr.begin(), arr.end());
          int high = accumulate(arr.begin(), arr.end(), 0);
          int ans = -1;
  
          while (low <= high) {
              int mid = low + (high - low) / 2;
              if (canAllocate(arr, k, mid)) {
                  ans = mid;
                  high = mid - 1; // try smaller
              } else {
                  low = mid + 1; // increase pages
              }
          }
          return ans;
      }
  };
    