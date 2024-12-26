#include <stdio.h>
#include <stdlib.h>

int main() {
    char expression[256];
    printf("Enter expression: ");
    scanf("%[^\n]", expression);

    // Evaluating the expression
    int result = (int)system(expression);
    printf("Result: %d\n", result);

    return 0;
}
