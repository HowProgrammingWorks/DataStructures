package com.company;

import java.lang.reflect.Field;

/**
 * Created by Vova Moskalenko on 03.06.2017.
 */
public class ObjectAccess {

    private String name = "Marcus";
    private String city = "Roma";
    private int born = 121;

    public ObjectAccess() {}

    public String getCity() {return city;}

    public void setCity(String city) {this.city = city;}

    public static void main(String[] args) throws Exception {

        ObjectAccess person = new ObjectAccess();
        System.out.println("Person name is: " + person.name);
        System.out.println("Person name is: " + person.getClass().getDeclaredField("name").get(person));

        person.name = null;
        Field arr[] = person.getClass().getDeclaredFields();
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i].get(person));
        }

        person.setCity(null);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i].get(person));
        }

        //with getter
        System.out.println(person.getCity());
    }
}
