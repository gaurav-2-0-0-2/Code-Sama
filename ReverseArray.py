# Using two pointer approach we have reversed an array 

def R_arr(arr):
    left = 0 
    right = len(arr)-1
   

    while(left<right):
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp 
        left += 1
        right -= 1

    return arr

A = [2,3,4,5,6,7,8]
print("Reversed array will be:")
print(R_arr(A))

