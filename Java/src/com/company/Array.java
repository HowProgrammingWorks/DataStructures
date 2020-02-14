package com.company;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Vova Moskalenko on 04.06.2017.
 */
public class Array {

    public static void main(String[] args) {

        ArrayList<Character> letters = new ArrayList();
        letters.add('B');
        System.out.println(letters);
        letters.add(0, 'A');
        System.out.println(letters);
        letters.add('C');
        System.out.println(letters);

        String[] arr = {"C++", "JavaScript", "Python", "Haskell", "Swift"};
        List<String> languages = Arrays.asList(arr);
        System.out.print("length: " + languages.size() + " " + "languages[0]:" + " " + languages.get(0) + " "
                + "languages[languages.length-1]:" + " " + languages.get(languages.size() - 1) );
    }
}
