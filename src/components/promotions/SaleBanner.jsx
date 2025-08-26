class Solution {
    public:
        int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
            int n=dimensions.size();
            double temp=0.0;
            int res=0;
            for(auto &dim:dimensions)
            {
                double t=sqrt(dim[0]*dim[0] + dim[1]*dim[1]);
                if(temp<t)
                {
                    res=dim[0]*dim[1];
                    temp=t;
                }else if(temp==t)
                {
                    res=max(res,dim[0]*dim[1]);
                }
            }
            return res;
        }
    };class Solution {
public:
    int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
        int n=dimensions.size();
        double temp=0.0;
        int res=0;
        for(auto &dim:dimensions)
        {
            double t=sqrt(dim[0]*dim[0] + dim[1]*dim[1]);
            if(temp<t)
            {
                res=dim[0]*dim[1];
                temp=t;
            }else if(temp==t)
            {
                res=max(res,dim[0]*dim[1]);
            }
        }
        return res;
    }
};class Solution {
public:
    int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
        int n=dimensions.size();
        double temp=0.0;
        int res=0;
        for(auto &dim:dimensions)
        {
            double t=sqrt(dim[0]*dim[0] + dim[1]*dim[1]);
            if(temp<t)
            {
                res=dim[0]*dim[1];
                temp=t;
            }else if(temp==t)
            {
                res=max(res,dim[0]*dim[1]);
            }
        }
        return res;
    }
};class Solution {
    public:
        int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
            int n=dimensions.size();
            double temp=0.0;
            int res=0;
            for(auto &dim:dimensions)
            {
                double t=sqrt(dim[0]*dim[0] + dim[1]*dim[1]);
                if(temp<t)
                {
                    res=dim[0]*dim[1];
                    temp=t;
                }else if(temp==t)
                {
                    res=max(res,dim[0]*dim[1]);
                }
            }
            return res;
        }
    };