#Tuples are used to store multiple items in a single variable.

#Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Set, and Dictionary, all with different qualities and usage.

#A tuple is a collection which is ordered and unchangeable.

#Tuples are written with round brackets.
thislist=("apple","cherry","mango")
print(thislist)
print(type(thislist))
#Once a tuple is created, you cannot change its values. Tuples are unchangeable, or immutable as it also is called.

#But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple.
#thislist.insert(2,"watermelon")
x=thislist
y=list(x)
y[1]="kiwi"
x=tuple(y)
print(x)