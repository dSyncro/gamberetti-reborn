#include <iostream>

#define SOMETHING

#ifdef SOMETHING
#   define SOMETHINGELSE
#else
#   define SOMETHINGNOTOK
#endif

namespace spacename {

}

// This is a comment
/* 
    This
    Is
    A Multiline
    comment
*/

template <typename T>
class Templated {
    T x;
};

class A {

public:

    static void A();
    void B();
};

class Base {

public:

    virtual ~Base() = default;
};

class Derived : Base {

public:

    int x = 6;
    int y = 9;
};

enum class Enumeration {
    A, B, C, D
};

template <class T>
T Sum(T a, T b) {
    return a + b;
}

int main(int argc, char** argv){
    // This is a comment

    /*
     * This is also a comment
     * ADASDASDASDASDASDASDASD
     */

    const char* string = "String\n";

    A a = A();
    a.B();

    A* aa = new A();
    aa->B();

    Derived d = Derived();
    d.x = 2;

    int s = Sum<int>(4, 5);
    main();

    Enumeration e = Enumeration::A;

    float x = .5f * 2;

    std::cout << "Hello World!" << std::endl;
    std::cin >> x;

    goto LABEL;

    switch (n){
        case 1:
            break;
        default:
            break;
    }

    for (int x = 0; x < 5; x++);
    while(true);

    return 0;
}

virtual void Strip(const std::string& ref) const override {

}

void Strip(const char* ref) {
    
}