#Lists are used to store multiple items in a single variable.
#thislist=["apple","banana","cherry"]
thislist = ["apple", "banana", "cherry", "apple", "cherry"]
thislist[1]="blackcurrant"
thislist[1:3]=["blackcurrant", "mango"]
thislist.insert(2,"watermelon")
print(thislist)
print (len(thislist))
print(type(thislist))