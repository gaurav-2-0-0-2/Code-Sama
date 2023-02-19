// This code is contributed by the greatest of the great Mr. Aman Jain

#include<iostream>
using namespace std;
 
int binary_search (int arr[],int low,int high,int key){
if(low>high){
    return -1;
}
else {
  int  mid = low + high/2;
    if(arr[mid]==key) return mid;
    else if(arr[mid]>key) return binary_search(arr,low,mid-1,key);
    else return binary_search(arr,mid+1,high,key);
}
}
 int main(){
    int arr[] = {1,3,5,7,9};
    int x = 5;
    int ans = binary_search(arr,0,4,4);
    if(ans==-1) cout<<"No"<<endl;
    else cout<<"yes"<<endl;
    return 0;

 }