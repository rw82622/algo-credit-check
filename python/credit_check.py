import functools
def credit_check(Str):
    arr = []
    Str = list(Str)
    for i in range(len(Str)-1, -1, -1):
        num = int(Str[i])
        if i % 2 == 0:
            num *= 2
            if (len(str(num)) > 1):
                splitedNum = list(str(num))
                num = int(splitedNum[0]) + int(splitedNum[1])
        arr.insert(0, num)
    sum = functools.reduce(lambda total, curr : total + curr, arr)
    return "The number is valid!" if sum % 10 == 0 else "The number is invalid!"


