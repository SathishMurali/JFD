package com.nseit.SpringExercise.simplePackage;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class Application {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext =
                new AnnotationConfigApplicationContext(Application.class);
        BinarySearch binarySearch = applicationContext.getBean(BinarySearch.class);

        int result = binarySearch.binarySearch(new int[]{1, 2, 3, 4, 5}, 3);
        System.out.println(result);
    }
}
