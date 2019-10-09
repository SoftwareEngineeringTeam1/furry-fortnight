-- RUN A SCRIPT TO CREATE A DATABASE NAMED furry
-- Once you have a furry database, run this script
-- 
use furry;   

CREATE TABLE UserTable (
  UserID nvarchar(255) NOT NULL PRIMARY KEY,
  FName nvarchar(255) NOT NULL,
  LName nvarchar(255) NOT NULL,
  Email nvarchar(255) NOT NULL,
  PhoneNumber nvarchar(255) NOT NULL,
  UserPassword nvarchar(255) NOT NULL,
  Organization nvarchar(255) NOT NULL,
);

CREATE TABLE EventLocation (
  LocationID nvarchar(255) NOT NULL PRIMARY KEY,
  LocationCode nvarchar(255) NOT NULL,
  LocationName nvarchar(255) NOT NULL,
);

CREATE TABLE Category (
  CategoryID nvarchar(255) NOT NULL PRIMARY KEY,
  CategoryName nvarchar(255) NOT NULL,
);

CREATE TABLE EventInfo (
  EventID nvarchar(255) NOT NULL PRIMARY KEY,
  EventName nvarchar(255) NOT NULL,
  CategoryID nvarchar(255) NOT NULL,
  LocationID nvarchar(255) NOT NULL,
  EventTime time NOT NULL,
  EventDate date NOT NULL,
  CreatedBy nvarchar(255) NOT NULL,
  CreatedDate date NOT NULL,
  ModifiedDate date NOT NULL,
  Capacity nvarchar(255) NOT NULL,
  EventDescription nvarchar(255),
  CONSTRAINT FK_EVENT_CATEGORY FOREIGN KEY (CategoryID)
  REFERENCES Category(CategoryID),
  CONSTRAINT FK_EVENTLOCATION_EVENT FOREIGN KEY (LocationID)
  REFERENCES EventLocation(LocationID),
  CONSTRAINT FK_USERCREATED_EVENT FOREIGN KEY (CreatedBy)
  REFERENCES UserTable(UserID)
);

CREATE TABLE RVPS_Event (
  RVPSid nvarchar(255) NOT NULL PRIMARY KEY,
  EventID nvarchar(255) NOT NULL,
  UserID nvarchar(255) NOT NULL,
  CONSTRAINT FK_USER_RVPS FOREIGN KEY (UserID)
  REFERENCES UserTable(UserID),
  CONSTRAINT FK_EVENT_RVPS FOREIGN KEY (EventID)
  REFERENCES EventInfo(EventID)
);


