import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { userTestObjects } from './utils/test.objects';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  const { userUpdate, id, newUser } = userTestObjects;
  let service: UsersService;
  let userModel: Model<UserDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: Model,
        },
      ],
      // imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
    }).compile();

    service = module.get<UsersService>(UsersService);
    userModel = module.get<Model<UserDocument>>(getModelToken(User.name));
  });

  describe('createUser', () => {
    it('should return a saved user', async () => {
      const spy = jest
        .spyOn(userModel, 'create')
        .mockImplementation(async (u: CreateUserDto) => u);
      const user = await service.create(newUser);
      expect(user).toBeTruthy();
      expect(spy).toBeCalled();
    });
  });

  describe('updateUser', () => {
    it('should update a user', async () => {
      const spy = jest
        .spyOn(userModel, 'findByIdAndUpdate')
        .mockResolvedValue(newUser);
      const user = await service.update(id, userUpdate);
      expect(user).toBeTruthy();
      expect(spy).toBeCalled();
    });
  });
});
