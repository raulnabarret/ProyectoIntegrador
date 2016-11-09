#include <ArduinoJson.h> //Json Format Library
#include <DHT.h>
#include "dht.h" //cargamos la librería DHT
#define DHTPIN 2 //Seleccionamos el pin en el que se //conectarÃ¡ el sensor
#define DHTTYPE DHT11 //Se selecciona el DHT11 (hay //otros DHT)
DHT dht(DHTPIN, DHTTYPE); //Se inicia una variable que serÃ¡ usada por Arduino para comunicarse con el sensor

void setup() {
  
Serial.begin(9600); //Se inicia la comunicaciÃ³n serial 
dht.begin(); //Se inicia el sensor

}

void loop() {

StaticJsonBuffer<200> jsonBuffer;
JsonObject& root = jsonBuffer.createObject();

float h = dht.readHumidity(); //Se lee la humedad
float t = dht.readTemperature(); //Se lee la temperatura


root["label"] = "new Date()";
root["value"] = h;
root.printTo(Serial);
Serial.println();
delay(5000);


root["label"] = "new Date() 2";
root["value"] = t;
root.printTo(Serial);
Serial.println();
delay(5000);



}

