import os

parent_dir = "E:\christmas-meme-calender\src\images"

for x in range(1, 25):
    path = os.path.join(parent_dir, str(x), "dev")
    onlyfiles = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]
    onlyfilesLen = len(onlyfiles)
    for f in onlyfiles:
        os.rename(os.path.join(path, f), os.path.join(path, str(onlyfilesLen) + ".jpg"))
        print(onlyfilesLen)
        onlyfilesLen = onlyfilesLen - 1
    # print(onlyfiles)
    # os.mkdir(path)
    # print("Directory '% s' created" % x) 