import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import * as Yup from 'yup';

import {
  StakingContainer,
  StakingTop,
  StakingForm,
  StakingFormGroup,
  StakingLabel,
  StakingInput,
  ButtonRow,
  CongratulationContainer,
} from './Staking,styles';

import { Button } from '../../../../globalStyles';
import Context from '../../../../utils/Context';
import { quoteForStaking } from '../../../../utils/quoteForStaking';

type FormData = {
  price: number;
  premium: number;
  term: number;
};

const Staking: React.FC<{ id: string }> = ({ id }) => {
  const { connector } = useContext(Context);

  const [stakingOpen, setStakingOpen] = useState(false);
  const [isPuttedForStaking, setIsPuttedForStaking] = useState(false);

  const validationSchema = Yup.object().shape({
    price: Yup.number().required('Price is required'),
    premium: Yup.number().required('Premium is required'),
    term: Yup.number()
      .required('Term is required')
      .min(7, 'Term cannot be smaller tnan 7 days'),
  });

  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const toogleStakingOpen = () => {
    setStakingOpen(!stakingOpen);
  };

  const onSubmit = (data: FormData) => {
    if (!connector) return;

    const { price, premium, term } = data;

    quoteForStaking(
      id,
      price.toString(),
      premium.toString(),
      term.toString(),
      connector,
    ).then(() => {
      console.log('Great success!');
      setIsPuttedForStaking(true);
    });
  };

  return (
    <StakingContainer>
      {stakingOpen ? (
        <>
          <StakingTop onClick={toogleStakingOpen}>
            Staking <IoIosArrowUp />
          </StakingTop>
          <StakingForm onSubmit={handleSubmit(onSubmit)}>
            <StakingFormGroup>
              <StakingLabel htmlFor="price">Price (ETH)</StakingLabel>
              <StakingInput type="number" id="price" {...register('price')} />
            </StakingFormGroup>
            <StakingFormGroup>
              <StakingLabel htmlFor="premium">Premium (ETH)</StakingLabel>
              <StakingInput
                type="number"
                id="premium"
                {...register('premium')}
              />
            </StakingFormGroup>
            <StakingFormGroup>
              <StakingLabel htmlFor="term">Term</StakingLabel>
              <StakingInput type="number" id="term" {...register('term')} />
            </StakingFormGroup>
            <ButtonRow>
              {isPuttedForStaking ? (
                <CongratulationContainer>
                  <span>
                    Congratulations! You have put your NFT for staking.
                  </span>
                </CongratulationContainer>
              ) : (
                <Button violet big type="submit">
                  Put for staking
                </Button>
              )}
            </ButtonRow>
            {/* {isPuttedForStaking ? (
              <CongratulationContainer>
                <span>Congratulations! You have put your NFT for staking.</span>
                <Button violet onClick={putForStaking}>
                  Cancel
                </Button>
              </CongratulationContainer>
            ) : (
              <>
                <ButtonRow>
                  <Button disabled={true} violet big onClick={putForStaking}>
                    Put for staking
                  </Button>
                </ButtonRow>
              </>
            )} */}
          </StakingForm>
          {/* <StakingContent>
            <StakingTable>
              <StakingTableHead>
                <TableRow>
                  <TableHeadTitle>Price (ETH)</TableHeadTitle>
                  <TableColumn>
                    <TableInput placeholder="15" id="price" />
                  </TableColumn>
                </TableRow>
              </StakingTableHead>
              <StakingTableBody>
                <TableRow>
                  <TableColumn>Premium (ETH)</TableColumn>
                  <TableColumn>
                    <TableInput placeholder="15" id="premium" />
                  </TableColumn>
                </TableRow>
                <TableRow>
                  <TableColumn>Term</TableColumn>
                  <TableColumn>
                    <TableInput placeholder="15" id="premium" />
                  </TableColumn>
                </TableRow>
              </StakingTableBody>
            </StakingTable>
          </StakingContent> */}
        </>
      ) : (
        <>
          <StakingTop closed onClick={toogleStakingOpen}>
            Staking <IoIosArrowDown />
          </StakingTop>
        </>
      )}
    </StakingContainer>
  );
};

export default Staking;
