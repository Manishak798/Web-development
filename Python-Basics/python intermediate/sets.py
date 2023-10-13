#A set is a collection which is unordered, unchangeable*, and unindexed.
thisset={"apple","banana","cherry"}
print(thisset)
thisset.discard("banana")
thisset.add("orange")
print(thisset)
new_set=["watermelon","guvava","berries"]
thisset.update(new_set)
print(thisset)