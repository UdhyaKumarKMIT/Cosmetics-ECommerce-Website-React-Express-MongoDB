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
public:
int n ;class Solution {
p
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
