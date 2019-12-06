use furry;   

CREATE TABLE Category (
  CategoryID MEDIUMINT NOT NULL AUTO_INCREMENT,
  CategoryName nvarchar(255) NOT NULL,
  PRIMARY KEY(CategoryID)
);


CREATE TABLE UserTable (
  UserId MEDIUMINT NOT NULL AUTO_INCREMENT,
  FName varchar(255) NOT NULL,
  LName varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  PhoneNumber varchar(255) NOT NULL,
  UserPassword varchar(255) NOT NULL,
  Organization varchar(255) NOT NULL,
  PRIMARY KEY(UserId)
)

CREATE TABLE EventLocation (
  LocationID MEDIUMINT NOT NULL AUTO_INCREMENT,
  LocationCode varchar(255) NOT NULL,
  LocationName varchar(255) NOT NULL,
  PRIMARY KEY (LocationID)
);

CREATE TABLE EventInfo (
  EventID MEDIUMINT NOT NULL AUTO_INCREMENT,
  EventName varchar(255) NOT NULL,
  CategoryID MEDIUMINT NOT NULL,
  LocationID MEDIUMINT NOT NULL,
  EventTime time NOT NULL,
  EventDate date NOT NULL,
  CreatedBy MEDIUMINT NOT NULL,
  CreatedDate date NOT NULL,
  ModifiedDate date NOT NULL,
  Capacity varchar(255) NOT NULL,
  EventDescription varchar(255),
  CONSTRAINT FK_EVENT_CATEGORY FOREIGN KEY (CategoryID)
  REFERENCES Category(CategoryID),
  CONSTRAINT FK_EVENTLOCATION_EVENT FOREIGN KEY (LocationID)
  REFERENCES EventLocation(LocationID),
  CONSTRAINT FK_USERCREATED_EVENT FOREIGN KEY (CreatedBy)
  REFERENCES UserTable(UserID),
  PRIMARY KEY(EventID)
);

CREATE TABLE RVPS_Event (
  RVPSid MEDIUMINT NOT NULL AUTO_INCREMENT,
  EventID MEDIUMINT NOT NULL,
  UserID MEDIUMINT NOT NULL,
  CONSTRAINT FK_USER_RVPS FOREIGN KEY (UserID)
  REFERENCES UserTable(UserID),
  CONSTRAINT FK_EVENT_RVPS FOREIGN KEY (EventID)
  REFERENCES EventInfo(EventID),
  PRIMARY KEY(RVPSid)
);