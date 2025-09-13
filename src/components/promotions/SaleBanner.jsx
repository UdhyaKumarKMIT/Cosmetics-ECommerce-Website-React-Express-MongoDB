
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
                    class Solution {
                        public:
                            long long expSum4[18]={1};
                            long long expSum(unsigned x){
                                if (x==0) return 0;
                                int log4=(31-countl_zero(x))/2;
                                int r=x-(1<<(2*log4));
                                return expSum4[log4]+r*(log4+1LL);
                            }
                            long long minOperations(vector<vector<int>>& queries) {
                                for(int i=1; i<18; i++){
                                    expSum4[i]=expSum4[i-1]+3LL*i*(1LL<<(2*(i-1)))+1;
                                //    cout<<i<<"->"<<expSum4[i]<<", ";
                                }
                                long long op=0;
                                for(auto& q: queries){
                                    int l=q[0]-1, r=q[1];
                                    op+=(expSum(r)-expSum(l)+1)/2;// ceiling of (expSum(r)-expSum(l))/2
                                }
                                return op;
                            }
                       
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
                                                class Solution {
                                                    public:
                                                        long long expSum4[18]={1};
                                                        long long expSum(unsigned x){
                                                            if (x==0) return 0;
                                                            int log4=(31-countl_zero(x))/2;
                                                            int r=x-(1<<(2*log4));
                                                            return expSum4[log4]+r*(log4+1LL);
                                                        }
                                                        long long minOperations(vector<vector<int>>& queries) {
                                                            for(int i=1; i<18; i++){
                                                                expSum4[i]=expSum4[i-1]+3LL*i*(1LL<<(2*(i-1)))+1;
                                                            //    cout<<i<<"->"<<expSum4[i]<<", ";
                                                            }
                                                            long long op=0;
                                                            for(auto& q: queries){
                                                                int l=q[0]-1, r=q[1];
                                                                op+=(expSum(r)-expSum(l)+1)/2;// ceiling of (expSum(r)-expSum(l))/2
                                                            }
                                                            return op;
                                                        }
                                                   
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
                                                                            class Solution {
                                                                                public:
                                                                                    long long expSum4[18]={1};
                                                                                    long long expSum(unsigned x){
                                                                                        if (x==0) return 0;
                                                                                        int log4=(31-countl_zero(x))/2;
                                                                                        int r=x-(1<<(2*log4));
                                                                                        return expSum4[log4]+r*(log4+1LL);
                                                                                    }
                                                                                    long long minOperations(vector<vector<int>>& queries) {
                                                                                        for(int i=1; i<18; i++){
                                                                                            expSum4[i]=expSum4[i-1]+3LL*i*(1LL<<(2*(i-1)))+1;
                                                                                        //    cout<<i<<"->"<<expSum4[i]<<", ";
                                                                                        }
                                                                                        long long op=0;
                                                                                        for(auto& q: queries){
                                                                                            int l=q[0]-1, r=q[1];
                                                                                            op+=(expSum(r)-expSum(l)+1)/2;// ceiling of (expSum(r)-expSum(l))/2
                                                                                        }
                                                                                        return op;
                                                                                    }
                                                                                           long long minOperations(vector<vector<int>>& queries) {
                                                                                        for(int i=1; i<18; i++){
                                                                                            expSum4[i]=expSum4[i-1]+3LL*i*(1LL<<(2*(i-1)))+1;
                                                                                        //    cout<<i<<"->"<<expSum4[i]<<", ";
                                                                                        }
                                                                                        long long op=0;
                                                                                        for(auto& q: queries){
                                                                                            int l=q[0]-1, r=q[1];
                                                                                            op+=(expSum(r)-expSum(l)+1)/2;// ceiling of (expSum(r)-expSum(l))/2
                                                                                        }
                                                                                        return op;
                                                                                    }
                                                                                           long long minOperations(vector<vector<int>>& queries) {
                                                                                        for(int i=1; i<18; i++){
                                                                                            expSum4[i]=expSum4[i-1]+3LL*i*(1LL<<(2*(i-1)))+1;
                                                                                        //    cout<<i<<"->"<<expSum4[i]<<", ";
                                                                                        }
                                                                                        long long op=0;
                                                                                        for(auto& q: queries){
                                                                                            int l=q[0]-1, r=q[1];
                                                                                            op+=(expSum(r)-expSum(l)+1)/2;// ceiling of (expSum(r)-expSum(l))/2
                                                                                        }
                                                                                        return op;
                                                                                    }
                                                                                    long long minOperations(vector<vector<int>>& queries) {
                                                                                        for(int i=1; i<18; i++){
                                                                                            expSum4[i]=expSum4[i-1]+3LL*i*(1LL<<(2*(i-1)))+1;
                                                                                        //    cout<<i<<"->"<<expSum4[i]<<", ";
                                                                                        }
                                                                                        long long op=0;
                                                                           public class Solution {
    public String sortVowels(String s) {
        int[] vowelCount = new int[11];
        int[] countIndexMap = new int[128];
        char[] result = s.toCharArray();
        char[] charMap = "AEIOUaeiou".toCharArray();

        for (int i = 0; i < charMap.length; i++) 
            countIndexMap[charMap[i]] = i + 1;

        for (char c : result) 
            vowelCount[countIndexMap[c]]++;
        int j = 1;
        int i = 0;

        while (j < vowelCount.length) {
            if (vowelCount[j] > 0)
                while (i < result.length) {
                    if (countIndexMap[result[i]] == 0) {
                        i++;
                        continue;
                    }
                    vowelCount[j]--;
                    result[i++] = charMap[j - 1];
                    break;
                }
            else
                j++;  
        }
        return new String(result);
    }
}public class Solution {
    public String sortVowels(String s) {
        int[] vowelCount = new int[11];
        int[] countIndexMap = new int[128];
        char[] result = s.toCharArray();
        char[] charMap = "AEIOUaeiou".toCharArray();

        for (int i = 0; i < charMap.length; i++) 
            countIndexMap[charMap[i]] = i + 1;

        for (char c : result) 
            vowelCount[countIndexMap[c]]++;
        int j = 1;
        int i = 0;

        while (j < vowelCount.length) {
            if (vowelCount[j] > 0)
                while (i < result.length) {
                    if (countIndexMap[result[i]] == 0) {
                        i++;
                        continue;
                    }
                    vowelCount[j]--;
                    result[i++] = charMap[j - 1];
                    break;
                }
            else
                j++;  
        }
        return new String(result);
    }
}public class Solution {
    public String sortVowels(String s) {
        int[] vowelCount = new int[11];
        int[] countIndexMap = new int[128];
        char[] result = s.toCharArray();
        char[] charMap = "AEIOUaeiou".toCharArray();

        for (int i = 0; i < charMap.length; i++) 
            countIndexMap[charMap[i]] = i + 1;

        for (char c : result) 
            vowelCount[countIndexMap[c]]++;
        int j = 1;
        int i = 0;

        while (j < vowelCount.length) {
            if (vowelCount[j] > 0)
                while (i < result.length) {
                    if (countIndexMap[result[i]] == 0) {
                        i++;
                        continue;
                    }
                    vowelCount[j]--;
                    result[i++] = charMap[j - 1];
                    break;
                }
            else
                j++;  
        }
        return new String(result);
    }
}public class Solution {
    public String sortVowels(String s) {
        int[] vowelCount = new int[11];
        int[] countIndexMap = new int[128];
        char[] result = s.toCharArray();
        char[] charMap = "AEIOUaeiou".toCharArray();

        for (int i = 0; i < charMap.length; i++) 
            countIndexMap[charMap[i]] = i + 1;

        for (char c : result) 
            vowelCount[countIndexMap[c]]++;
        int j = 1;
        int i = 0;

        while (j < vowelCount.length) {
            if (vowelCount[j] > 0)
                while (i < result.length) {
                    if (countIndexMap[result[i]] == 0) {
                        i++;
                        continue;
                    }
                    vowelCount[j]--;
                    result[i++] = charMap[j - 1];
                    break;
                }
            else
                j++;  
                class Solution {
                    public:
                        bool doesAliceWin(string s) {
                            for (int i = 0; i < s.size(); i++)
                                if ((0x104111 >> (s[i] - 97)) & 1)
                                    return 1;                                
                            return 0;
                        }
                    };class Solution {
                        public:
                            bool doesAliceWin(string s) {
                                for (int i = 0; i < s.size(); i++)
                           int freq[26], maxVowel = 0, maxConso = 0;
        for (char c : s) {
            int i = c - 'a';
            freq[i]++;
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                maxVowel = max(maxVowel, freq[i]);
            }
            else {
                maxConso = max(maxConso, freq[i]);
            }
        }
        return maxVowel + maxConso;int freq[26], maxVowel = 0, maxConso = 0;
        for (char c : s) {
            int i = c - 'a';
            freq[i]++;
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                maxVowel = max(maxVowel, freq[i]);
            }
            else {
                maxConso = max(maxConso, freq[i]);
            }
        }
        return maxVowel + maxConso;         if ((0x104111 >> (s[i] - 97)) & 1)
                                        return 1;                                
                                return 0;
                            }
                    };
                };