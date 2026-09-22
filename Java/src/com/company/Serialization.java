package com.company;

import java.io.*;

/**
 * Created by Vova Moskalenko on 04.06.2017.
 */
public class Serialization implements java.io.Serializable {

    String name = "Marcus";
    String city = "Roma";
    int born = 121;

    public static void main(String[] args) {

        Serialization person = new Serialization();
        //serialization
        try {
            FileOutputStream fileOut =
                    new FileOutputStream("person.txt");
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(person);
            out.close();
            fileOut.close();
            System.out.printf("Serialized data is saved in person.txt");
        }catch(IOException i) {
            i.printStackTrace();
        }

        Serialization person2 = null;
        //deserialization
        try {
            FileInputStream fileIn = new FileInputStream("person.txt");
            ObjectInputStream in = new ObjectInputStream(fileIn);
            person2 = (Serialization) in.readObject();
            in.close();
            fileIn.close();
        }catch(IOException i) {
            i.printStackTrace();
            return;
        }catch(ClassNotFoundException c) {
            System.out.println("Serialization class not found");
            c.printStackTrace();
            return;
        }

        System.out.println("Deserialized person...");
        System.out.println("Name: " + person.name);
        System.out.println("City: " + person.city);
        System.out.println("Born: " + person.born);

    }
}
