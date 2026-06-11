# This is a comment


#These are string variables
# name = "Londeka"
# surname = "Zikalala"

name = input("What is your name? ")
surname = input("Enter your surname")

# Integer variables 
# age = "27"
# luckyNumber = "7"

# Input for integers requires the integer function : int()
# Syntax : nameOfVariable = int(input(""))

birthYear = int(input("Enter Your birth year: "))
currentYear = int(input("Enter the current year: "))

# Calculate age

age = currentYear - birthYear

# concatenation is the same in python for strings: You use a +
# print(name + " " + surname + ": " + age + ": " + luckyNumber)
print(f"{name} {surname} : {age}")

#  Inputs in python use the input function 
# input("What is your name: ")
# To create variables that are inputs, you must declare them with the input function
# Syntax : variablename = input("")

#  Printing integer variables 
# You can use curly braces {} : print(f"I am {age} old")
#  you separate using commas :  print(name, age, )
#  Python always takes in Inputs as strings, so if you have other data types 
# you will get a type error.  This applies to the output as well, Python 
# does not concatenate
# strings and numbers(other data types), so you must use the f-string 
# function using the letter f