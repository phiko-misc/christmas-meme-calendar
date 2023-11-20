import os

parent_dir = os.getcwd() + "\images"

category = input("Enter your name on category")
if (os.path.join(parent_dir, str(x), category)):
    print("Category already exist")
    print("Plss run the script agen")
    return

path = os.path.join(parent_dir, category)
os.mkdir(path)
for x in range(1, 25):
    path = os.path.join(parent_dir, category, str(x))
    os.mkdir(path)