########################## ITERATIVE APPROACH #######################
# def binarySearch(arr,l,h,key):

#     while ( l<=h ):     # until this exists 
        
#      mid = (l+h) // 2   # This will give floor value 
#      if ( key == arr[mid] ):
#         return mid
#      elif ( key < arr[mid] ):
#         h = mid - 1
#      else:
#         l = mid + 1
#     return -1

# A = [2,3,4,6,7,8,9,12,34,56,778,987]
# result = binarySearch(A,0,len(A)-1,12)
# if (result == -1):
#    print("Element is not found")
# else:
#    print("Element is found")


######################## REACURSIVE APPROACH #########################

def RBinSrch(A, l, h , key):
   if (l <= h):   # To check if any element is present
     mid = (l+h) // 2
     if (key == A[mid]):
      return mid
     elif (key < A[mid]):
      return RBinSrch(A,l, mid-1, key)
     else:
      return RBinSrch(A, mid+1, h, key)
   else:
    return -1


A = [2,3,4,5,6,7,8,12,54,67,89,900]
result = RBinSrch(A, 0, len(A)-1, 13)
if (result != -1):
   print(" found ")
else:
   print("not found")