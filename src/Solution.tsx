import type { FunctionComponent } from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import EuroIcon from '@mui/icons-material/Euro';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from "@mui/icons-material/Storage";
import EventIcon from '@mui/icons-material/Event';
import { Solution as SolutionType } from "./App";
import { Link } from "react-router-dom";
import { InfrastructureType } from './enums'

import dynamodb from "./icons/dynamodb.svg";
import databaseMigrationService from "./icons/databaseMigrationService.svg";
import glue from "./icons/glue.svg";
import auroraServerless from "./icons/auroraServerless.svg";
import qldb from "./icons/qldb.svg";
import timestream from "./icons/timestream.svg";
import neptune from "./icons/neptune.svg";
import athenaS3 from "./icons/athenaS3.svg";
import s3 from "./icons/s3.svg";
import redshift from "./icons/redshift.svg";
import opensearch from "./icons/opensearch.svg";
import rds from "./icons/rds.svg";
import documentdb from "./icons/documentdb.svg";

enum MigrationService {
  DMS = "Database Migration Service",
  Glue = "Glue"
}

interface SolutionDescription {
    name: string;
    src: string;
    releaseDate: string;
    tags: string[];
    pricing?: SolutionPrice;
    description: string;
    documentationUrl: string;
    awesomeUrl?: string;
    implementationUrl: string;
    infrastructure?: InfrastructureType;
    dataMigrationServices: MigrationService[];
}

enum SolutionPrice {
    Cheap = "Cheap",
    Expensive = "Expensive",
}

export const solutionDescriptions: Record<SolutionType, SolutionDescription> = {
  DynamoDB: {
    name: "DynamoDB",
    src: dynamodb,
    releaseDate: "2012",
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    documentationUrl:
      "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/index.html",
    awesomeUrl: "https://github.com/alexdebrie/awesome-dynamodb",
    implementationUrl:
      "https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",
    infrastructure: InfrastructureType.Serverless,
    dataMigrationServices: [MigrationService.DMS, MigrationService.Glue],
  },
  AuroraServerless: {
    name: "Aurora Serverless",
    src: auroraServerless,
    releaseDate: "2018",
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. It enables you to run your database in the cloud without managing any database capacity.",
    documentationUrl:
      "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",
    implementationUrl:
      "https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",
    infrastructure: InfrastructureType.Serverless,
    dataMigrationServices: [MigrationService.Glue],
  },
  QLDB: {
    name: "Quantum Ledger Database",
    src: qldb,
    releaseDate: "2019",
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    documentationUrl:
      "https://docs.aws.amazon.com/qldb/latest/developerguide/index.html",
    awesomeUrl: "https://github.com/mlewis7127/awesome-qldb",
    implementationUrl: "https://www.google.com",
    dataMigrationServices: [],
  },
  Timestream: {
    name: "Timestream",
    src: timestream,
    releaseDate: "2020",
    tags: [],
    pricing: SolutionPrice.Cheap,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    documentationUrl:
      "https://docs.aws.amazon.com/timestream/latest/developerguide/index.html",
    awesomeUrl: "https://github.com/awslabs/amazon-timestream-tools",
    implementationUrl: "https://www.google.com",
    infrastructure: InfrastructureType.Serverless,
    dataMigrationServices: [],
  },
  Neptune: {
    name: "Neptune",
    src: neptune,
    releaseDate: "2018",
    tags: ["VPC needed"],
    pricing: SolutionPrice.Cheap,
    description:
      "Graph-oriented AWS managed database. Its query processing engine is optimized for leading graph query languages, Apache TinkerPop™ Gremlin and the W3C’s RDF SPARQL.",
    documentationUrl:
      "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",
    implementationUrl: "https://github.com/dabit3/cdk-appsync-neptune",
    infrastructure: InfrastructureType.Managed,
    dataMigrationServices: [],
  },
  AthenaS3: {
    name: "Athena with S3",
    src: athenaS3,
    releaseDate: "2016",
    tags: ["Pay per use"],
    pricing: SolutionPrice.Cheap,
    description:
      "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.",
    documentationUrl:
      "https://docs.aws.amazon.com/athena/latest/ug/what-is.html",
    implementationUrl:
      "https://github.com/theodo/serverless-databases/tree/main/athena",
    infrastructure: InfrastructureType.Serverless,
    dataMigrationServices: [],
  },
  S3Select: {
    name: "S3 Select",
    src: s3,
    releaseDate: "2018",
    tags: ["Pay per use"],
    pricing: SolutionPrice.Cheap,
    description:
      "S3 Select enables applications to retrieve only a subset of data from an object by using simple SQL expressions.",
    documentationUrl:
      "https://docs.aws.amazon.com/AmazonS3/latest/userguide/selecting-content-from-objects.html",
    implementationUrl:
      "https://aws.amazon.com/fr/blogs/developer/introducing-support-for-amazon-s3-select-in-the-aws-sdk-for-javascript/",
    dataMigrationServices: [MigrationService.Glue],
  },
  RDS: {
    name: "RDS",
    src: rds,
    releaseDate: "",
    tags: [],
    pricing: SolutionPrice.Expensive,
    description: "RDS description",
    documentationUrl: "https://docs.aws.amazon.com/rds/index.html",
    implementationUrl: "",
    infrastructure: InfrastructureType.Managed,
    dataMigrationServices: [MigrationService.DMS, MigrationService.Glue],
  },
  DocumentDB: {
    name: "DocumentDB",
    src: documentdb,
    releaseDate: "",
    tags: [],
    pricing: SolutionPrice.Expensive,
    description: "DocumentDB (with MongoDB compatibility)",
    documentationUrl:
      "https://docs.aws.amazon.com/managedservices/latest/userguide/document-db.html",
    implementationUrl: "",
    infrastructure: InfrastructureType.Managed,
    dataMigrationServices: [MigrationService.DMS],
  },
  OpenSearch: {
    name: "OpenSearch (ex-ElasticSearch)",
    src: opensearch,
    releaseDate: "",
    tags: [],
    pricing: SolutionPrice.Expensive,
    description: "OpenSearch (ex-ElasticSearch)",
    documentationUrl:
      "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",
    implementationUrl: "",
    infrastructure: InfrastructureType.Managed,
    dataMigrationServices: [],
  },
  Redshift: {
    name: "Redshift",
    src: redshift,
    releaseDate: "2013",
    tags: ["Pay per use"],
    pricing: SolutionPrice.Cheap,
    description:
      "Amazon Redshift uses SQL to analyze structured and semi-structured data across data warehouses, operational databases, and data lakes, using AWS-designed hardware and machine learning to deliver the best price performance at any scale.",
    documentationUrl:
      "https://docs.aws.amazon.com/redshift/latest/gsg/index.html",
    implementationUrl:
      "https://docs.aws.amazon.com/redshift/latest/gsg/index.html",
    infrastructure: InfrastructureType.Serverless,
    dataMigrationServices: [MigrationService.Glue],
  }
};

interface SolutionProps {
    solution: SolutionType
}

export const Solution: FunctionComponent<SolutionProps> = ({ solution }) => {
    const { name, src, releaseDate, pricing, description, documentationUrl, awesomeUrl, implementationUrl, tags, infrastructure, dataMigrationServices } = solutionDescriptions[solution];
    return (
      <Stack direction="row" spacing={4}>
        <Avatar
          alt={name}
          src={src}
          variant="square"
          sx={{ marginTop: 2, height: 120, width: 120 }}
        />
        <Stack spacing={2}>
          <Typography variant="h2">{name}</Typography>
          <Divider light />
          <Stack direction="row" spacing={2}>
            <Chip icon={<EventIcon />} label={releaseDate} variant="outlined" />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Chip
              icon={<EuroIcon />}
              label={pricing}
              color={pricing === SolutionPrice.Cheap ? "success" : "error"}
              variant="outlined"
            />
            <Chip
              icon={<LanguageIcon />}
              label="Parti-QL compatible"
              color="success"
              variant="outlined"
            />
            {infrastructure && (
              <Link to='/infrastructures' >
                <Chip
                  icon={<StorageIcon />}  
                  label={infrastructure}
                  color="info"
                  variant="outlined"
                  />
              </Link>
            )}
            {tags.map((tag) => (
              <Chip label={tag} color="secondary" variant="outlined" />
            ))}
          </Stack>
          <Divider light />
          { dataMigrationServices.length !== 0 && (
            <>
              <Stack direction="row" spacing={2} >
                <Typography variant="h6">Migration tools</Typography>
                { dataMigrationServices.includes(MigrationService.DMS) && ( 
                  <Chip
                    icon={<Avatar alt={MigrationService.DMS} src={databaseMigrationService} sx={{ width: 24, height: 24 }} />}
                    label={`${MigrationService.DMS} compatible`}
                    color="info"
                    variant="outlined"
                  />
                )}
                { dataMigrationServices.includes(MigrationService.Glue) && ( 
                  <Chip
                    icon={<Avatar alt={MigrationService.Glue} src={glue} sx={{ width: 24, height: 24 }} />}
                    label={`${MigrationService.Glue} compatible`}
                    color="info"
                    variant="outlined"
                  />
                )}
              </Stack>
              <Divider light />
            </>
          )}
          <Typography variant="body1">{description}</Typography>
          <Stack direction="row" spacing={4}>
            <Button variant="contained" target="_blank" href={documentationUrl}>
              Documentation
            </Button>
            {awesomeUrl !== undefined && (
              <Button variant="contained" target="_blank" href={awesomeUrl}>
                Awesome Repository
              </Button>
            )}
            <Button
              variant="contained"
              target="_blank"
              href={implementationUrl}
            >
              Implementation example
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
}
