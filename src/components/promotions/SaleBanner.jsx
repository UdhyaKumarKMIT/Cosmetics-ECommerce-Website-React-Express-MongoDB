sort(prices.begin(), prices.end());
int n = prices.size();
int min_cost = 0, max_cost = 0;
int i = 0, j = n - 1;

// Calculate minimum cost
while (i <= j) {
    min_cost += prices[i];
    j -= k;
    i++;
}

i = 0;
j = n - 1;

// Calculate maximum cost
while (i <= j) {
    max_cost += prices[j];
    i += k;
    j--;
}

return {min_cost, max_cost};
sort(prices.begin(), prices.end());
int n = prices.size();
int min_cost = 0, max_cost = 0;
int i = 0, j = n - 1;

// Calculate minimum cost
while (i <= j) {
    min_cost += prices[i];
    j -= k;
    i++;
}

i = 0;
j = n - 1;

// Calculate maximum cost
while (i <= j) {
    max_cost += prices[j];
    i += k;
    j--;
}

return {min_cost, max_cost};
sort(prices.begin(), prices.end());
int n = prices.size();
int min_cost = 0, max_cost = 0;
int i = 0, j = n - 1;

// Calculate minimum cost
while (i <= j) {
    min_cost += prices[i];
    j -= k;
    i++;
}

i = 0;
j = n - 1;

// Calculate maximum cost
while (i <= j) {
    max_cost += prices[j];
    i += k;
    j--;
}

return {min_cost, max_cost};
sort(prices.begin(), prices.end());
int n = prices.size();
int min_cost = 0, max_cost = 0;
int i = 0, j = n - 1;

// Calculate minimum cost
while (i <= j) {
    min_cost += prices[i];
    j -= k;
    i++;
}

i = 0;
j = n - 1;

// Calculate maximum cost
while (i <= j) {
    max_cost += prices[j];
    i += k;
    j--;
}

return {min_cost, max_cost};
