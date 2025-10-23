import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import "./App.css"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home"
function App() {
  return (
    class Solution {
public:yguffhfyfyfyfhfyf.
int n ;class Solution {
p// C++ Solution
static constexpr int MOD = 1e9 + 7;
static int C[31][31] = {{0}};
static int dp[31][31][50][31];
class Solution {
public:
    bool hasSameDigits(string s) {
        int len=s.size();
        string t="";
        while(s.size()>2)
        {
        len=s.size();
        t="";
        for(int i=0;i<len-1;i++)
        {
           int temp=((s[i]-'0')+(s[i+1]-'0'))%10;
           t+=string(1,temp);  //temp will be [0,9]
        }
        s=t;
        }
        return s[0]==s[1];
    }
};
class Solution {
    int m, k, n;
    public int maxFrequency(int[] A, int k, int numOperations) {
        Arrays.sort(A);

        // Case 1
        Map<Integer, Integer> count = new HashMap<>();
        int res = 0, i = 0, j = 0, n = A.length;
        for (int a : A) {
            while (j < n && A[j] <= a + k) {
                count.put(A[j], count.getOrDefault(A[j], 0) + 1);
                j++;
            }
            while (i < n && A[i] < a - k) {
                count.put(A[i], count.get(A[i]) - 1);
                i++;
            }
            int cur = Math.min(j - i, count.getOrDefault(a, 0) + numOperations);
            res = Math.max(res, cur);
        }

        // Case 2
        for (i = 0, j = 0; j < n; j++) {
            while (A[i] + k + k < A[j]) {
                i++;
            }
            res = Math.max(res, Math.min(j - i + 1, numOperations));
        }
        return res;
    }
    void Pascal() {
        if (C[0][0] == 1) return;
        for (int i = 1; i <= 30; i++) {
            C[i][0] = C[i][i] = 1;
            for (int j = 1; j <= i / 2; j++) {
                const int Cij = (C[i - 1][j 

    int dfs(int m, int k, int i, unsigned flag, vector<int>& nums) {
        const int bz = __builtin_popcount(flag);
        if (m < 0 || k < 0 || m + bz < k) return 0;
        if (m == 0) return (k == bz) ? 1 : 0;
        if (i >= n) return 0;

        if (dp[m][k][i][flag] != -1) return dp[m][k][i][flag];

        long long ans = 0, powX = 1;
        const int x = nums[i];
        for (int f = 0; f <= m; f++) {
            long long perm = 1LL * C[m][f] * powX % MOD;
            unsigned newFlag = flag + f;
            unsigned nextFlag = newFlag >> 1;
            bool bitSet = newFlag & 1;
       class Solution {
public:
    int maxDistinctElements(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int ans = 0, prev = -1e9;

        for (int i = 0; i < nums.size(); i++) {
            int l = max(nums[i] - k, prev + 1);
            if (l <= nums[i] + k) {
                prev = l, ans++;
            }
        }
        return ans;
    }
};     ans = (ans + perm * dfs(m - f, k - bitSet, i + 1, nextFlag, nums)) % MOD;
            powX = powX * x % MOD;
        }
        return dp[m][k][i][flag] = ans;
    }

public:
    int magicalSum(int m, int k, vector<int>& nums) {
        Pascal();
        this->m = m;
        this->k = k;
        n = nums.size();
        memset(dp, -1, sizeof(dp));
        return dfs(m, k, 0, 0, nums);
    }
};
    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {
        int n = potions.size(), m = spells.size();
        vector<int> ret(m);
        sort(potions.begin(), potions.end());
        for (int r = 0; r < m; ++r) {
            long long s = spells[r];
            long long temp = (success + s - 1) / s;
            auto it = lower_bound(potions.begin(), potions.end(), temp);
            ret[r] = n - static_cast<int>(it - potions.begin());
        }
        return ret;
    }
};
int vis[51][51];
int dx[4] = {1,-1,0,0} ;
int dy[4] = {0,0,1,-1} ;
bool is_valid(int i , intclass Solution {
public:
int n ;
int vis[51][51];
int dx[4] = {1,-1,0,0} ;
int dy[4] = {0,0,1,-1} ;
bool is_valid(int i , intclass UnionFind {
public:
    vector<int> parent;

    UnionFind(int size) : parent(size + 1) {
        iota(parent.begin(), parent.end(), 0);
    }

    int find(int i) {
        if (i == parent[i])
            return i;
        parent[i] = find(parent[i]);
        return parent[i];
    }

    void unite(int i) { parent[i] = find(i + 1); }
};

class Solution {
public:
    vector<int> avoidFlood(vector<int>& rain) {
        int n = rain.size();
        UnionFind uf(n + 1);
        unordered_map<int, int> map;
        vector<int> res(n, 1);

        for (int i = 0; i < n; i++) {
            int lake = rain[i];
            if (lake == 0) continue;

            res[i] = -1;
            uf.unite(i);

            if (map.find(lake) != map.end()) {
                int prev = map[lake];
                int dry = uf.find(prev + 1);

                if (dry >= i) return {};

                res[dry] = lake;
                uf.unite(dry);
                map[lake] = i;
            } else {
                map[lake] = i;
            }
        }

        return res;
    }
}; j,auto& arr,int mid)
{
    return i>=0 and j>=0 and i<n and j<n and arr[i][j]<=mid and !vis[i][j] ;
}
bool solve(int i , int j,int mid,auto& arr)
{
    if( i == n-1 and j == n-1 )return true ;

    vis[i][j] = 1 ;
   bool ans = false ;
    for(int k = 0 ; k<4;k++)
    {
        int ni = i+dx[k] ;
        int nj = j+dy[k] ;
        if(is_valid(ni,nj,arr,mid))
        {
        ans|=solve(ni,nj,mid,arr);
        
        }
     
    }
    return ans ;

}

bool dfs(int mid , auto& arr)
{
    for(int i = 0 ; i<=50;i++)
    {
        for(int j = 0 ; j<=50;j++)vis[i][j] = 0 ;
    }

    if(is_valid(0,0,arr,mid))
     return solve(0,0,mid,arr) ;
     return false ;
}
    int swimInWater(vector<vector<int>>& arr) {
             n = arr.size() ;
        int low = 0 , high = n*n , ans  = -1 ;
        while(low<=high)
        {
            int mid = low + (high-low)/2 ;
            if(dfs(mid,arr))
            {
                ans = mid ;
                high  = mid -1; 
            }
            else low = mid + 1 ;
        }

        return ans ;
        
    }
};
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div><div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div><div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
      <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
   
  )
}

export default App
