// #include <stdio.h>

// int main() {
//     int arr[6]={1,2,3,7,5,43};
//     int count = 0, found = 0;
   
//     while (num > 0) {
//         if (num % 10 == 5) {
//             count++;
//             if (count == 3) {
//                 found = 1;
//                 break;
//             }
//         } else {
//             count = 0;
//         }
//         num = num / 10;
//     }

//     if (found)
//         printf("YES\n");
//     else
//         printf("NO\n");

//     return 0;
// }
// for (int i=1;i<=n;i++){
//     for(int j=1;j<=n-i;j++){
//         printf(" ");
//     }
//     for(int j=1;j<=i;j++){
//         printf("*");
//     }
//     printf("\n");

// }
// return 0;
// }
// for(int i=1;i<=n;i++){
//     for(int j=10;j>=0;j--){
//         printf("%d",j);
//     }
//     printf("\n");
// }
// return 0;}
// for (int i=0;i<6;i+=2){
//      printf("%d\t",arr[i]);
//     }
//    return 0;
// }


#include <stdio.h>

void main() {
//    int a,b;
//    printf("Enter dimns");
//    scanf("%d%d",&a,&b);
//    int area=a*b;
//    int perimeter=(a+b)*2;
//    printf("%d\n%d\n",area,perimeter);
for (int i=1;i<=n;i++){
    for(int j=1;j<=i;j++){
        printf(" ");
    }
    for(int j=1;j<=i;j++){
        printf("*");
    }
    printf("\n");

}