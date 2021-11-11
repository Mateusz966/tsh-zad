import {ProductHeaderLayout} from "../../layouts/ProductHeaderLayout/ProductHeaderLayout";
import {GridItem} from "@chakra-ui/react";
import {Brand} from "../Brand/Brand";
import {ProductsSearchForm} from "../ProductsSearchForm/ProductsSearchForm";
import {UserAvatarDropdown} from "../UserAvatarDropdown/UserAvatarDropdown";

export const ProductsHeader = () => (
  <ProductHeaderLayout>
    <GridItem>
      <Brand />
    </GridItem>
    <GridItem>
     <ProductsSearchForm />
    </GridItem>
    <GridItem>
     <UserAvatarDropdown />
    </GridItem>
  </ProductHeaderLayout>
)