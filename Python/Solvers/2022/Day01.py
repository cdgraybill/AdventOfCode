def day01part01():
    with open("ProblemInputs/2022/Day01Input.txt") as file:
        input = file.readlines()
        input = [line.strip() for line in input]

        highestCount = 0
        temp = 0

        for i in range(len(input)):
            if (input[i] != ""):
                temp += int(input[i])
            elif (highestCount < temp):
                highestCount = temp
                temp = 0
            else:
                temp = 0
        return highestCount

def day01part02():
    with open("ProblemInputs/2022/Day01Input.txt") as file:
        input = file.readlines()
        input = [line.strip() for line in input]

        first = 0
        second = 0
        third = 0
        temp = 0

        for i in range(len(input)):
            if (input[i] != ""):
                temp += int(input[i])
            elif (first <= temp):
                first = temp
                second = first
                third = second
                temp = 0
            elif (second <= temp):
                second = temp
                third = second
                temp = 0
            elif (third <= temp):
                third = temp
                temp = 0
            else:
                temp = 0
        
        return first + second + third

print(day01part02())