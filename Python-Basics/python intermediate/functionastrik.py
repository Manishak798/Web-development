#If the number of arguments is unknown, add a * before the parameter name--tuples
def myfunction(*kids):
    print("names of kids: "+kids[2])
myfunction("emli","kunal","tia")
#If the number of keyword arguments is unknown, add a double ** before the parameter name--dictionary
#def myfunction(**kids)