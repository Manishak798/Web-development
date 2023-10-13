#include <bits/stdc++.h>
using namespace std;

int main()
{
    // your code goes here
    int t;
    cin >> t;
    while (t--)
    {
        int N, jars = 3;
        int arr[3];
        cin >> N;
        while (N > 0)
        {

            for (int i = 0; i < 3; i++)
            {
                N = N / 3;
                arr[i] = N;
                        }
        }
        cout << arr << endl;
    }

    return 0;
}