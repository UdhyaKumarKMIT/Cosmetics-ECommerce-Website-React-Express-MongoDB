
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';

import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';-types';
import React from 'react';pes';
import React from 'react';
import PropTypes from 'prop-types';
import React from 'react';-types';
import React from 'rclass Solution {
    public:
        int triangleNumber(vector<int>& nums) {
            sort(nums.begin(),nums.end());
            int res=0,n=nums.size(),l=0,h=0;
    //condition a+b>c so we are fixing c and trying to find nums[a]+nums[b]>nums[c]
            for(int i=n-1;i>=2;i--)
            {
                l=0;
                h=i-1;
                while(l<h)
                {
                    if(nums[l]+nums[h]>nums[i])
                    {
                        res+=(h-l);
                        h--;
                    }else
                    {
                        l++;
                    }
                }
            }
            return res;
        }
    };
    };