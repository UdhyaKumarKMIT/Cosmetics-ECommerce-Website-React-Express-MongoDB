
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
            }#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<string> spellchecker(vector<string>& wordlist, vector<string>& queries) {
        unordered_set<string> exact(wordlist.begin(), wordlist.end());
        unordered_map<string, string> caseMap;
        unordered_map<string, string> vowelMap;

        for (string w : wordlist) {
            string lower = toLower(w);
            string devowel = deVowel(lower);
            if (!caseMap.count(lower)) caseMap[lower] = w;
            if (!vowelMap.count(devowel)) vowelMap[devowel] = w;
        }
        vector<string> result;
        for (string q : queries) {
            if (exact.count(q)) {
                result.push_back(q);
            } else {
                string lower = toLower(q);
                string devowel = deVowel(lower);

                if (caseMap.count(lower)) result.push_back(caseMap[lower]);
                else if (vowelMap.count(devowel)) result.push_back(vowelMap[devowel]);
                else result.push_back("");
            }
        }
        return result;
    }
private:
    string toLower(string s) {
        for (char &c : s) c = tolower(c);
        return s;
    }
    string deVowel(string s) {
        for (char &c : s) {
            if (isVowel(c)) c = '*';
        }
        return s;
    }
    bool isVowel(char c) {
        c = tolower(c);
        return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';
    }
};#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<string> spellchecker(vector<string>& wordlist, vector<string>& queries) {
        unordered_set<string> exact(wordlist.begin(), wordlist.end());
        unordered_map<string, string> caseMap;
        unordered_map<string, string> vowelMap;

        for (string w : wordlist) {
            string lower = toLower(w);
            string devowel = deVowel(lower);
            if (!caseMap.count(lower)) caseMap[lower] = w;
            if (!vowelMap.count(devowel)) vowelMap[devowel] = w;
        }
        vector<string> result;
        for (string q : queries) {
            if (exact.count(q)) {
                result.push_back(q);
            } else {
                string lower = toLower(q);
                string devowel = deVowel(lower);

                if (caseMap.count(lower)) result.push_back(caseMap[lower]);
                else if (vowelMap.count(devowel)) result.push_back(vowelMap[devowel]);
                else result.push_back("");
            }
        }
        return result;
    }
private:
    string toLower(string s) {
        for (char &c : s) c = tolower(c);
        return s;
    }
    string deVowel(string s) {
        for (char &c : s) {
            if (isVowel(c)) c = '*';
        }
        return s;
    }
    bool isVowel(char c) {
        c = tolower(c);
        return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';
    }
};#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<string> spellchecker(vector<string>& wordlist, vector<string>& queries) {
        unordered_set<string> exact(wordlist.begin(), wordlist.end());
        unordered_map<string, string> caseMap;
        unordered_map<string, string> vowelMap;

        for (string w : wordlist) {
            string lower = toLower(w);
            string devowel = deVowel(lower);
            if (!caseMap.count(lower)) caseMap[lower] = w;
            if (!vowelMap.count(devowel)) vowelMap[devowel] = w;
        }
        vector<string> result;
        for (string q : queries) {
            if (exact.count(q)) {
                result.push_back(q);
            } else {
                string lower = toLower(q);
                string devowel = deVowel(lower);

                if (caseMap.count(lower)) result.push_back(caseMap[lower]);
                else if (vowelMap.count(devowel)) result.push_back(vowelMap[devowel]);
                else result.push_back("");
            }
        }
        return result;
    }
private:
    string toLower(string s) {
        for (char &c : s) c = tolower(c);
        return s;
    }
    string deVowel(string s) {
        for (char &c : s) {
            if (isVowel(c)) c = '*';
        }
        return s;
    }
    bool isVowel(char c) {
        c = tolower(c);
        return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';
    }class Solution {
public:
    int canBeTypedWords(string text, string broken){
        unordered_set<char> brokenKeys;
        int count = 0;

        for (auto& c : broken){
            brokenKeys.insert(c);
        }

        stringstream ss(text);
        string word;
        vector<string> words;

        while (ss >> word){
            words.push_back(word);
        }

        for (auto w : words)
        {
            for (char c : w)
            {
                if (brokenKeys.find(c) != brokenKeys.end())
                {
                    count++;
                    break;
                }
            }
        }
        class Solution {
            public:
                vector<int> replaceNonCoprimes(vector<int>& nums) {
                    vector<int> stack;
                    for (int num : nums) {
                        while (!stack.empty()) {
                            int top = stack.back();
                            int g = gcd(top, num);
                            if (g == 1) {
                                break;
                            }
                            stack.pop_back();
                            // compute LCM
                            long long merged = (long long)top / g * num;
                            num = (int)merged;
                        }
                        stack.push_back(num);
                    }
                    return stack;
                }
                
            private:
                int gcd(int a, int b) {
                    return b == 0 ? a : gcd(b, a % b);
                }
            };class Solution {
                public:
                    vector<int> replaceNonCoprimes(vector<int>& nums) {
                        vector<int> stack;
                        for (int num : nums) {
                            while (!stack.empty()) {
                                int top = stack.back();
                                int g = gcd(top, num);
                                if (g == 1) {
                                    break;
                                }
                                stack.pop_back();
                                // compute LCM
                                long long merged = (long long)top / g * num;
                                num = (int)merged;
                            }
                            stack.push_back(num);
                        }
                        return stack;
                    }
                    
                private:
                    int gcd(int a, int b) {
                        return b == 0 ? a : gcd(b, a % b);
                        #include <set>
                        #include <string>
                        using namespace std;
                        
                        struct Info {
                            string name;
                            string cuisine;
                            int rating{};
                        
                            Info() = default;
                            Info(string name, string cuisine, int rating) : name{name}, cuisine{cuisine}, rating{rating}{}
                        
                            bool operator<(const Info& first) const {
                                if (rating == first.rating) {
                                    return name < first.name;
                                }
                                return rating > first.rating;
                            }
                        };
                        
                        class FoodRatings {
                            
                            unordered_map<string, Info> foodNameToInfo;
                            unordered_map<string, set<Info>> cuisineNameToSortedInfo;
                        
                        public:
                            FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
                                for (size_t i = 0; i < foods.size(); ++i) {
                                    foodNameToInfo.emplace(foods[i], Info(foods[i], cuisines[i], ratings[i]));
                                    cuisineNameToSortedInfo[cuisines[i]].emplace(foods[i], cuisines[i], ratings[i]);
                                }
                            }
                        
                            void changeRating(const string& food, int newRating) {
                                Info& toUpdate = foodNameToInfo[food];
                                cuisineNameToSortedInfo[toUpdate.cuisine].erase(toUpdate);
                                toUpdate.rating = newRating;
                                cuisineNameToSortedInfo[toUpdate.cuisine].insert(toUpdate);
                            }
                        
                            string highestRated(const string& cuisine) const {
                                return cuisineNameToSortedInfo.at(cuisine).begin()->name;
                            }
                        };#include <set>
                        #include <string>
                        using namespace std;
                        
                        struct Info {
                            string name;
                            string cuisine;
                            int rating{};
                        
                            Info() = default;
                            Info(string name, string cuisine, int rating) : name{name}, cuisine{cuisine}, rating{rating}{}
                        
                            bool operator<(const Info& first) const {
                                if (rating == first.rating) {
                                    return name < first.name;
                                }
                                return rating > first.rating;
                            }
                        };
                        
                        class FoodRatings {
                            
                            unordered_map<string, Info> foodNameToInfo;
                            unordered_map<string, set<Info>> cuisineNameToSortedInfo;
                        
                        public:
                            FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
                                for (size_t i = 0; i < foods.size(); ++i) {
                                    foodNameToInfo.emplace(foods[i], Info(foods[i], cuisines[i], ratings[i]));
                                    cuisineNameToSortedInfo[cuisines[i]].emplace(foods[i], cuisines[i], ratings[i]);
                                }
                            }
                        
                            void changeRating(const string& food, int newRating) {
                                Info& toUpdate = foodNameToInfo[food];
                                cuisineNameToSortedInfo[toUpdate.cuisine].erase(toUpdate);
                                toUpdate.rating = newRating;
                                cuisineNameToSortedInfo[toUpdate.cuisine].insert(toUpdate);
                            }
                        
                            string highestRated(const string& cuisine) const {
                                return cuisineNameToSortedInfo.at(cuisine).begin()->name;
                            }
                        };#include <set>
                        #include <string>
                        using namespace std;
                        
                        struct Info {
                            string name;
                            string cuisine;
                            int rating{};
                        
                            Info() = default;
                            Info(string name, string cuisine, int rating) : name{name}, cuisine{cuisine}, rating{rating}{}
                        
                            bool operator<(const Info& first) const {
                                if (rating == first.rating) {
                                    return name < first.name;
                                }
                                return rating > first.rating;
                            }
                        };
                        
                        class FoodRatings {
                            
                            unordered_map<string, Info> foodNameToInfo;
                            unordered_map<string, set<Info>> cuisineNameToSortedInfo;
                        
                        public:
                            FoodRatings(vector<string>& foods, vector<string>& cuisines, vector<int>& ratings) {
                                for (size_t i = 0; i < foods.size(); ++i) {
                                    foodNameToInfo.emplace(foods[i], Info(foods[i], cuisines[i], ratings[i]));
                                    cuisineNameToSortedInfo[cuisines[i]].emplace(foods[i], cuisines[i], ratings[i]);
                                }
                            }
                        
                            void changeRating(const string& food, int newRating) {
                                Info& toUpdate = foodNameToInfo[food];
                                cuisineNameToSortedInfo[toUpdate.cuisine].erase(toUpdate);
                                toUpdate.rating = newRating;
                                cuisineNameToSortedInfo[toUpdate.cuisine].insert(toUpdate);
                            }
                        
                      class Spreadsheet {
public:
    int rows;
    unordered_map<string, int> cells;

    Spreadsheet(int rows) {
        this->rows = rows;
    }
    
    void setCell(string cell, int value) {
        cells[cell] = value;
    }
    
    void resetCell(string cell) {
        cells.erase(cell);
    }
    
    int getValue(string formula) {
        formula = formula.substr(1);
        int plus = formula.find('+');
        string a = formula.substr(0, plus);
        string b = formula.substr(plus + 1);

        auto val = [&](string s) {
            return all_of(s.begin(), s.end(), ::isdigit) ? stoi(s) : cells[s];
        };

        return val(a) + val(b);
    }
};class Spreadsheet {
public:
    int rows;
    unordered_map<string, int> cells;

    Spreadsheet(int rows) {
        this->rows = rows;
    }
    
    void setCell(string cell, int value) {
        cells[cell] = value;
    }
    
    void resetCell(string cell) {
        cells.erase(cell);
    }
    
    int getValue(string formula) {
        formula = formula.substr(1);
        int plus = formula.find('+');
        string a = formula.substr(0, plus);
        string b = formula.substr(plus + 1);

        auto val = [&](string s) {
            return all_of(s.begin(), s.end(), ::isdigit) ? stoi(s) : cells[s];
        };

        return val(a) + val(b);
    }
};