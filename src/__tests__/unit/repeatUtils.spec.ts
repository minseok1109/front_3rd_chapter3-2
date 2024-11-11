import { Event } from '../../types';
import { generateRepeatedEvents } from '../../utils/repeatUtils';

describe('repeatUtils', () => {
  describe('generateRepeatedEvents', () => {
    it('반복이 없는 일정은 원본 그대로 반환한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'none',
          interval: 1,
        },
      };
      expect(generateRepeatedEvents(baseEvent)).toEqual([baseEvent]);
    });

    it('반복 종료일까지 매일 반복되는 일정을 생성한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'daily',
          interval: 1,
          endDate: '2024-01-02',
        },
      };

      const repeatEvents: Event[] = [
        {
          id: 'test-1',
          title: '반복 테스트',
          date: '2024-01-01',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'daily',
            interval: 1,
            endDate: '2024-01-02',
          },
        },
        {
          id: 'test-1-1',
          title: '반복 테스트',
          date: '2024-01-02',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'daily',
            interval: 1,
            endDate: '2024-01-02',
          },
        },
      ];

      expect(generateRepeatedEvents(baseEvent)).toEqual(repeatEvents);
    });

    it('반복 종료일까지 매주 반복되는 일정을 생성한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'weekly',
          interval: 1,
          endDate: '2024-01-08',
        },
      };

      const repeatEvents: Event[] = [
        {
          id: 'test-1',
          title: '반복 테스트',
          date: '2024-01-01',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'weekly',
            interval: 1,
            endDate: '2024-01-08',
          },
        },
        {
          id: 'test-1-1',
          title: '반복 테스트',
          date: '2024-01-08',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'weekly',
            interval: 1,
            endDate: '2024-01-08',
          },
        },
      ];

      expect(generateRepeatedEvents(baseEvent)).toEqual(repeatEvents);
    });

    it('반복 종료일까지 매월 반복되는 일정을 생성한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'monthly',
          interval: 1,
          endDate: '2024-02-01',
        },
      };

      const repeatEvents: Event[] = [
        {
          id: 'test-1',
          title: '반복 테스트',
          date: '2024-01-01',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'monthly',
            interval: 1,
            endDate: '2024-02-01',
          },
        },
        {
          id: 'test-1-1',
          title: '반복 테스트',
          date: '2024-02-01',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'monthly',
            interval: 1,
            endDate: '2024-02-01',
          },
        },
      ];

      expect(generateRepeatedEvents(baseEvent)).toEqual(repeatEvents);
    });

    it('반복 종료일까지 매년 반복되는 일정을 생성한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'yearly',
          interval: 1,
          endDate: '2025-01-01',
        },
      };

      const repeatEvents: Event[] = [
        {
          id: 'test-1',
          title: '반복 테스트',
          date: '2024-01-01',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'yearly',
            interval: 1,
            endDate: '2025-01-01',
          },
        },
        {
          id: 'test-1-1',
          title: '반복 테스트',
          date: '2025-01-01',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'yearly',
            interval: 1,
            endDate: '2025-01-01',
          },
        },
      ];

      expect(generateRepeatedEvents(baseEvent)).toEqual(repeatEvents);
    });

    it('반복 종료일이 없는 경우, 2025-06-30까지 반복되는 일정을 생성한다.', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'daily',
          interval: 1,
        },
      };

      const result = generateRepeatedEvents(baseEvent);
      expect(result[result.length - 1].date).toBe('2025-06-30');
    });

    it('반복 종료일까지 반복 간격이 2 이상일 때 올바르게 처리한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'daily',
          interval: 2,
          endDate: '2024-01-03',
        },
      };

      const repeatEvents: Event[] = [
        {
          id: 'test-1',
          title: '반복 테스트',
          date: '2024-01-01',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'daily',
            interval: 2,
            endDate: '2024-01-03',
          },
        },
        {
          id: 'test-1-1',
          title: '반복 테스트',
          date: '2024-01-03',
          startTime: '10:00',
          endTime: '11:00',
          description: '반복 일정 테스트',
          location: '회의실',
          category: '업무',
          notificationTime: 10,
          repeat: {
            type: 'daily',
            interval: 2,
            endDate: '2024-01-03',
          },
        },
      ];

      expect(generateRepeatedEvents(baseEvent)).toEqual(repeatEvents);
    });

    it('종료일이 시작일보다 이전인 경우 원본만 반환한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: '2024-01-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'daily',
          interval: 1,
          endDate: '2023-12-31',
        },
      };

      expect(generateRepeatedEvents(baseEvent)).toEqual([baseEvent]);
    });

    it('잘못된 날짜 형식의 경우 빈 배열을 반환한다', () => {
      const baseEvent: Event = {
        id: 'test-1',
        title: '반복 테스트',
        date: 'invalid-date',
        startTime: '10:00',
        endTime: '11:00',
        description: '반복 일정 테스트',
        location: '회의실',
        category: '업무',
        notificationTime: 10,
        repeat: {
          type: 'daily',
          interval: 1,
        },
      };

      expect(generateRepeatedEvents(baseEvent)).toEqual([]);
    });
  });
});
