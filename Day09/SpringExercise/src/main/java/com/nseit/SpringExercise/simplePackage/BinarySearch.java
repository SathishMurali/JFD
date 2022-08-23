package com.nseit.SpringExercise.simplePackage;

import javax.inject.Inject;
import javax.inject.Named;

@Named
public class BinarySearch {
    @Inject
    private SortAlg sortAlg;
    public int binarySearch(int[] numbers, int numberToSearch){
        int[] sortedNumbers = sortAlg.sort(numbers);
        System.out.println(sortAlg);

        return 12;
    }
}
