import sys

with open("test.txt", "x") as my_file:
    my_file.write("Line 0 - file created")
    
print("File created. => The \"x\" flag is for file creation. If the file already exists it raises FileExistsError")

input("\nPress any key to attempt to create the file with the same name:")
try:
    my_file = open("test.txt", "x")
    my_file.write("Line 0 - file created")
    my_file.close()
except FileExistsError:
    print("Here we caught the exeption after attempting to do just that")
    # sys.exit()
    
print("HERE")
    