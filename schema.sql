DROP DATABASE IF EXISTS reservationsDB;
CREATE database reservationsDB;

USE reservationsDB;

CREATE TABLE customer (
    position INT AUTO_INCREMENT NOT NULL,
    customerName VARCHAR(100) NOT NULL,
    customerEmail VARCHAR(100) NOT NULL,
    customerID VARCHAR(100) NOT NULL,
    phoneNumber INT NOT NULL,
    waitlist BOOLEAN DEFAULT 1,
    PRIMARY KEY (position)
);
