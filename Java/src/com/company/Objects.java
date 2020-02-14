package com.company;

public class Objects {
    //our prewritten fields
    private String name;
    private String city;
    private int born;

    public Objects() {}

    public Objects(String name, String city, int born) {
        this.name = name;
        this.city = city;
        this.born = born;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setBorn(int born) {
        this.born = born;
    }

    public static void main(String[] args) {

        Objects obj1 = new Objects();
        obj1.name = "Marcus";
        obj1.city = "Roma";
        obj1.born = 121;

        //creating the object using constructor
        Objects obj2 = new Objects("Marcus", "Roma", 121);

        //creating the objects using inner methods
        Objects obj3 = new Objects();
        obj3.setName("Marcus");
        obj3.setCity("Roma");
        obj3.setBorn(121);
    }
}
