/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      isClient
      isService
      isOrganization
      companyName
      firstName
      lastName
      birthDate
      username
      login
      email
      mobile
      NIP
      adressId
      nationalityId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      services {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsCreated {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      reviewsReceived {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      info
      title
      description
      images
      creatorUsername
      customerId
      isServiced
      isActive
      serviceId
      categoryId
      adressId
      cityId
      createdAt
      updatedAt
      customer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      service {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      offers {
        items {
          id
          creatorUsername
          orderId
          isApproved
          candidateId
          createdAt
          updatedAt
          candidate {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      messages {
        items {
          id
          creatorUsername
          orderId
          userId
          createdAt
          updatedAt
          user {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      subCategories {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
      reviews {
        items {
          id
          creatorUsername
          rating
          text
          type
          orderId
          reviewerId
          reviewedId
          createdAt
          updatedAt
          reviewer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          reviewed {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      adress {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
      nextToken
    }
  }
`;
export const getOffer = /* GraphQL */ `
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
      id
      creatorUsername
      orderId
      isApproved
      candidateId
      createdAt
      updatedAt
      candidate {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const listOffers = /* GraphQL */ `
  query ListOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creatorUsername
        orderId
        isApproved
        candidateId
        createdAt
        updatedAt
        candidate {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        order {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      creatorUsername
      orderId
      userId
      createdAt
      updatedAt
      user {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creatorUsername
        orderId
        userId
        createdAt
        updatedAt
        user {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        order {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
      }
      nextToken
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      stringCode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      subCategories {
        items {
          id
          name
          stringCode
          categoryId
          createdAt
          updatedAt
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          orders {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const listSubCategorys = /* GraphQL */ `
  query ListSubCategorys(
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stringCode
        categoryId
        createdAt
        updatedAt
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        orders {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSubCategory = /* GraphQL */ `
  query GetSubCategory($id: ID!) {
    getSubCategory(id: $id) {
      id
      name
      stringCode
      categoryId
      createdAt
      updatedAt
      category {
        id
        name
        stringCode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        subCategories {
          items {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
          nextToken
        }
      }
      orders {
        items {
          id
          orderId
          subCategoryId
          createdAt
          updatedAt
          order {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          subCategory {
            id
            name
            stringCode
            categoryId
            createdAt
            updatedAt
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            orders {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const getOrderSubCategory = /* GraphQL */ `
  query GetOrderSubCategory($id: ID!) {
    getOrderSubCategory(id: $id) {
      id
      orderId
      subCategoryId
      createdAt
      updatedAt
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
      subCategory {
        id
        name
        stringCode
        categoryId
        createdAt
        updatedAt
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        orders {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listOrderSubCategorys = /* GraphQL */ `
  query ListOrderSubCategorys(
    $filter: ModelOrderSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderSubCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        subCategoryId
        createdAt
        updatedAt
        order {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        subCategory {
          id
          name
          stringCode
          categoryId
          createdAt
          updatedAt
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          orders {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      creatorUsername
      rating
      text
      type
      orderId
      reviewerId
      reviewedId
      createdAt
      updatedAt
      reviewer {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      reviewed {
        id
        isClient
        isService
        isOrganization
        companyName
        firstName
        lastName
        birthDate
        username
        login
        email
        mobile
        NIP
        adressId
        nationalityId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        services {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsCreated {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviewsReceived {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
      }
      order {
        id
        info
        title
        description
        images
        creatorUsername
        customerId
        isServiced
        isActive
        serviceId
        categoryId
        adressId
        cityId
        createdAt
        updatedAt
        customer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        service {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        offers {
          items {
            id
            creatorUsername
            orderId
            isApproved
            candidateId
            createdAt
            updatedAt
            candidate {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        messages {
          items {
            id
            creatorUsername
            orderId
            userId
            createdAt
            updatedAt
            user {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        category {
          id
          name
          stringCode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          subCategories {
            items {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        subCategories {
          items {
            id
            orderId
            subCategoryId
            createdAt
            updatedAt
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            subCategory {
              id
              name
              stringCode
              categoryId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        reviews {
          items {
            id
            creatorUsername
            rating
            text
            type
            orderId
            reviewerId
            reviewedId
            createdAt
            updatedAt
            reviewer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            reviewed {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            order {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        adress {
          id
          creatorUsername
          regionId
          cityId
          street
          house
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
          postcode
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
      }
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creatorUsername
        rating
        text
        type
        orderId
        reviewerId
        reviewedId
        createdAt
        updatedAt
        reviewer {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        reviewed {
          id
          isClient
          isService
          isOrganization
          companyName
          firstName
          lastName
          birthDate
          username
          login
          email
          mobile
          NIP
          adressId
          nationalityId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          services {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsCreated {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviewsReceived {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nationality {
            id
            name
            stringCode
            isMain
            createdAt
            updatedAt
          }
        }
        order {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
      }
      nextToken
    }
  }
`;
export const listAdresss = /* GraphQL */ `
  query ListAdresss(
    $filter: ModelAdressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creatorUsername
        regionId
        cityId
        street
        house
        nationality {
          id
          name
          stringCode
          isMain
          createdAt
          updatedAt
        }
        postcode
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        city {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getAdress = /* GraphQL */ `
  query GetAdress($id: ID!) {
    getAdress(id: $id) {
      id
      creatorUsername
      regionId
      cityId
      street
      house
      nationality {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
      postcode
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      city {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      id
      name
      stringCode
      regionId
      createdAt
      updatedAt
      orders {
        items {
          id
          info
          title
          description
          images
          creatorUsername
          customerId
          isServiced
          isActive
          serviceId
          categoryId
          adressId
          cityId
          createdAt
          updatedAt
          customer {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          service {
            id
            isClient
            isService
            isOrganization
            companyName
            firstName
            lastName
            birthDate
            username
            login
            email
            mobile
            NIP
            adressId
            nationalityId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            services {
              nextToken
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            reviewsCreated {
              nextToken
            }
            reviewsReceived {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
          }
          offers {
            items {
              id
              creatorUsername
              orderId
              isApproved
              candidateId
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              creatorUsername
              orderId
              userId
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            stringCode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            subCategories {
              nextToken
            }
          }
          subCategories {
            items {
              id
              orderId
              subCategoryId
              createdAt
              updatedAt
            }
            nextToken
          }
          reviews {
            items {
              id
              creatorUsername
              rating
              text
              type
              orderId
              reviewerId
              reviewedId
              createdAt
              updatedAt
            }
            nextToken
          }
          adress {
            id
            creatorUsername
            regionId
            cityId
            street
            house
            nationality {
              id
              name
              stringCode
              isMain
              createdAt
              updatedAt
            }
            postcode
            createdAt
            updatedAt
            orders {
              nextToken
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          city {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
        }
        nextToken
      }
      region {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const listCitys = /* GraphQL */ `
  query ListCitys(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stringCode
        regionId
        createdAt
        updatedAt
        orders {
          items {
            id
            info
            title
            description
            images
            creatorUsername
            customerId
            isServiced
            isActive
            serviceId
            categoryId
            adressId
            cityId
            createdAt
            updatedAt
            customer {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            service {
              id
              isClient
              isService
              isOrganization
              companyName
              firstName
              lastName
              birthDate
              username
              login
              email
              mobile
              NIP
              adressId
              nationalityId
              createdAt
              updatedAt
            }
            offers {
              nextToken
            }
            messages {
              nextToken
            }
            category {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
            subCategories {
              nextToken
            }
            reviews {
              nextToken
            }
            adress {
              id
              creatorUsername
              regionId
              cityId
              street
              house
              postcode
              createdAt
              updatedAt
            }
            city {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
          }
          nextToken
        }
        region {
          id
          name
          stringCode
          createdAt
          updatedAt
          cities {
            items {
              id
              name
              stringCode
              regionId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const listRegions = /* GraphQL */ `
  query ListRegions(
    $filter: ModelRegionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stringCode
        createdAt
        updatedAt
        cities {
          items {
            id
            name
            stringCode
            regionId
            createdAt
            updatedAt
            orders {
              nextToken
            }
            region {
              id
              name
              stringCode
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRegion = /* GraphQL */ `
  query GetRegion($id: ID!) {
    getRegion(id: $id) {
      id
      name
      stringCode
      createdAt
      updatedAt
      cities {
        items {
          id
          name
          stringCode
          regionId
          createdAt
          updatedAt
          orders {
            items {
              id
              info
              title
              description
              images
              creatorUsername
              customerId
              isServiced
              isActive
              serviceId
              categoryId
              adressId
              cityId
              createdAt
              updatedAt
            }
            nextToken
          }
          region {
            id
            name
            stringCode
            createdAt
            updatedAt
            cities {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listNationalitys = /* GraphQL */ `
  query ListNationalitys(
    $filter: ModelNationalityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNationalitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stringCode
        isMain
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNationality = /* GraphQL */ `
  query GetNationality($id: ID!) {
    getNationality(id: $id) {
      id
      name
      stringCode
      isMain
      createdAt
      updatedAt
    }
  }
`;
