#include <stdio.h>
#include <math.h>
int main()
{
    // int a;int b;int c;
    // printf("Enter all sides ");
    // scanf("%d %d %d",&a, &b, &c);
    // if (a + b > c && a + c > b && b + c > a) {
    // double S=(a+b+c)/2.0;
    // double area=(S*(S-a)*(S-b)*(S-c));
    // double A=sqrt(area);
    // printf("Area is =%.2lf\n",A);
    // }
    // else {
    //     printf("Invalid triangle sides!\n");
    // }

    // return 0;

    //     num=n;
    //        while(num!=0){
    //             temp=num%10;
    //             reverse=reverse*10+temp;
    //             num=num/10;
    //        }

    //  printf("Your number reverse is %d",reverse);
    //     //    else{
    //     //     printf("It is not a palindrome");
    //     // }

    //     return 0;
    // }
    // int n;
    // printf("Enter number: ");
    // scanf("%d",&n);
    // for(int i=1;i<=4;i++){
    //     printf("%5d%5d\n",i,i*i*i);

    // }
    // return 0;
    // }
    // int i, j;
    // for (i = 2; i <= n; i++)
    // {
    //     for (j = 2; j <= i / j; j++)
    //     {
    //         if (!(i % j))
    //         {
    //             break;
    //         }

    //     }
    //      if (j > (i / j))
    //         {
    //             printf("%d is prime\n", i);
    //         }

    // }

    // for(i=1;i<=n;i++){
    //     for(j=1;j<=i;j++){
    //         printf("*",j);
    //     }
    //     printf("\n");
    // }
    // for(i=n;i>=0;i--){
    //     for(j=1;j<=i;j++){
    //         printf("*",j);
    //     }
    //     printf("\n");
    // }

    // for(i=1;i<=n;i++) {
    //     int num=n;
    //     for(j=1;j<=n;j++){
    //         printf("%d",num);
    //         num-=1;
    //         }
    //     printf("\n");
    // }
    //       return 0;
    // }
    // int num,deno;
    // num=2,deno=5;
    // for(int i=1;i<=n;i++){
    // printf("%d/%d",num,deno);
    // if(i<n){
    //     printf("+");

    // }
    // num+=3;
    // deno+=4;
    // }
    // return 0;
    // }
    // int x;
    // char *sup[]={"1","2","3","4","5","6","7","8","9","10"};
    // printf("Enter the value of x= ");
    // scanf("%d", &x);

    // for (int i = n; i <= n; i+=2){
    //     int power=2*i-1;
    // if(i==1){
    //     printf("x");

    // }
    // else{
    //     printf("x^%d/%d",power,power);
    // }

    //     if (i < n-1)
    //     {
    //         printf("+");
    //     }
    // }
    //     int n;
    //     printf("Enter the value of n= ");
    //     scanf("%d", &n);
    //     for (int i = 1; i <= n; i++)
    //     {

    //         printf("%d*%d", n-i+1,i);

    //     if (i <n)
    //     {
    //         printf("+");
    //     }
    // }
    //     return 0;
    // }
    //     int n;
    //     printf("Enter the value of n= ");
    //     scanf("%d", &n);
    //     for (int i = 1; i <= n; i++)
    //     {
    //         int num = 1;
    //         int deno =(int)pow(i,i);

    //         printf("%d/%d", num, deno);

    //         if (i < n)
    //         {
    //             printf("+");
    //         }
    //     }
    //     return 0;
    // }
    //     int n, i;
    //     printf("Enter the value of n= ");
    //     scanf("%d", &n);

    //     for (i = 1; i <=n; i+=2){
    //  int deno = 1;
    //       for(int j=1;j<=i;j++)
    //       deno*=j;
    //         printf("1/%d",deno);
    //         if (i < n)
    //         {
    //             printf("+");
    //         }
    //     }

    //     return 0;
    // }
//     int n, i;
//     printf("Enter the value of n= ");
//     scanf("%d", &n);

//     for (i = 1; i <= n; i++)
//     {
//         int deno = i * (i + 1) / 2;

//         printf("(%d)", deno);
//         if (i < n)
//         {
//             printf("+");
//         }
//     }

// return 0;
// }
 int n,x;
        printf("Enter the value of n= ");
        scanf("%d", &n);
        for (int i = 1; i <= n; i++)
        {
           
            int num =(int)pow(x,i);

            printf("%d/%d", num, deno);

            if (i < n)
            {
                printf("+");
            }
        }
        return 0;
    }