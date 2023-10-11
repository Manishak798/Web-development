#include <bits/stdc++.h>
using namespace std;
int main()
{
    char answer;
    cout << "WHAT WILL BE THE  NUMBER OF ITERATIONS  FOR THE FOLLOWING OUTPUT ?" << endl;
    for (int i = 1; i < 5; i++)
    {
        for (int j = 1; j <= i; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    cout << "a: 5" << endl;
    cout << "b: 4" << endl;
    cout << "c: 1" << endl;
    cout << "d: 0" << endl;
    cin >> answer;
    switch (answer)
    {
    case 'a':
        cout << "INCORRECT Answer";
        break;
    case 'b':
        cout << "CORRECT Answer";
        break;
    case 'c':
        cout << "INCORRECT Answer";
        break;
    case 'd':
        cout << "INCORRECT Answer";
        break;

    default:
        cout << "INVALID Input";
        break;
    }
    return 0;
}