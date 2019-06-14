CREATE TABLE Member(
 id VARCHAR(128) PRIMARY KEY,
 email VARCHAR (128) UNIQUE NOT NULL,
 full_name VARCHAR (128) NOT NULL,
 full_name_youngest_child VARCHAR (128) NOT NULL,
 school_year VARCHAR(4) NOT NULL,
 contact_number VARCHAR(11) NOT NULL,
 committee BOOLEAN,
 helper BOOLEAN,
 specific_event BOOLEAN,
 second_hand BOOLEAN,
 info BOOLEAN,
 agreed_privacy_policy BOOLEAN NOT NULL,
 created_on TIMESTAMP NOT NULL,
 updated_on TIMESTAMP
);

CREATE TABLE Member_New(
 id uuid PRIMARY KEY,
 email VARCHAR (128) UNIQUE NOT NULL,
 full_name VARCHAR (128) NOT NULL,
 full_name_youngest_child VARCHAR (128) NOT NULL,
 school_year VARCHAR(4) NOT NULL,
 contact_number VARCHAR(11) NOT NULL,
 committee BOOLEAN,
 helper BOOLEAN,
 specific_event BOOLEAN,
 second_hand BOOLEAN,
 info BOOLEAN,
 agreed_privacy_policy BOOLEAN NOT NULL,
 created_on TIMESTAMP NOT NULL,
 updated_on TIMESTAMP
);